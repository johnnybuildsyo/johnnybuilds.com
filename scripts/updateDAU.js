#!/usr/bin/env node

import { google } from "googleapis";
import path from "path";
import { promises as fs } from "fs";
import { existsSync, mkdirSync } from "fs";
import _ from "lodash";

// Define the output directory and file
const OUTPUT_DIR = path.resolve("./app/_data");
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

const projects = [
  {
    slug: "johnnybuilds-com",
    propertyId: "466668788",
  },
  {
    slug: "publicbuilders-org",
    propertyId: "466582829",
  },
];

const fileName = path.join(OUTPUT_DIR, `projects_dau.json`);
export const SECRETS_PATH = path.resolve("./scripts/_secrets");

// Function to fetch daily active users for a single project
const fetchProjectData = async (propertyId, analytics) => {
  try {
    const response = await analytics.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dimensions: [{ name: "date" }],
        metrics: [{ name: "activeUsers" }],
        dateRanges: [{ startDate: "7daysAgo", endDate: "yesterday" }],
      },
    });

    // Parse the response to create the stats for this project
    const stats = {};
    for (const row of response.data.rows || []) {
      const date = row.dimensionValues[0]?.value; // e.g., "20241112"
      const dau = row.metricValues[0]?.value; // Daily active users
      if (date && dau) {
        // Transform date from "YYYYMMDD" to "MM_DD_YYYY"
        const year = date.slice(0, 4); // First 4 characters
        const month = date.slice(4, 6); // Next 2 characters
        const day = date.slice(6, 8); // Last 2 characters
        const formattedDate = `${month}_${day}_${year}`; // e.g., "11_12_2024"
        stats[formattedDate] = { dau: parseInt(dau, 10) };
      }
    }
    return stats;
  } catch (error) {
    console.error(`Error fetching data for property ${propertyId}:`, error.message);
    return {};
  }
};

// Main function to fetch and combine data for all projects
const fetchDailyActiveUsers = async () => {
  try {
    // Path to your service account key
    const keyPath = path.join(SECRETS_PATH, "service-account-key.json");
    if (!existsSync(keyPath)) {
      throw new Error("Service account key file not found.");
    }

    // Set up authentication
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    const analytics = google.analyticsdata({
      version: "v1beta",
      auth,
    });

    // Initialize combined data object
    let combinedData = {};

    for (const project of projects) {
      console.log(`Fetching data for project: ${project.slug}`);
      const projectData = await fetchProjectData(project.propertyId, analytics);

      // Add project data under its slug
      combinedData[project.slug] = projectData;
    }

    // Read existing data from the file
    let existingData = {};
    if (existsSync(fileName)) {
      const fileContent = await fs.readFile(fileName, "utf-8");
      existingData = JSON.parse(fileContent);
    }

    // Deep merge existing data with the new data
    const updatedData = _.merge({}, existingData, combinedData);

    // Sort each project's data by date
    Object.keys(updatedData).forEach((slug) => {
      const sortedProjectData = Object.keys(updatedData[slug])
        .sort((a, b) => {
          // Convert date keys back to sortable format (YYYYMMDD)
          const [aMonth, aDay, aYear] = a.split("_");
          const [bMonth, bDay, bYear] = b.split("_");
          const aSortable = `${aYear}${aMonth}${aDay}`;
          const bSortable = `${bYear}${bMonth}${bDay}`;
          return aSortable.localeCompare(bSortable);
        })
        .reduce((acc, key) => {
          acc[key] = updatedData[slug][key];
          return acc;
        }, {});

      updatedData[slug] = sortedProjectData;
    });

    // Write the updated data back to the file
    await fs.writeFile(fileName, JSON.stringify(updatedData, null, 2));
    console.log(`DAU data updated and saved to ${fileName}`);
  } catch (error) {
    console.error("Error fetching or updating DAU data:", error.message);
  }
};

// Execute the script
fetchDailyActiveUsers();
