import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function RequestSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Success!</CardTitle>
          <CardDescription>Your project build request has been submitted.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Thank you for your submission. We'll review your project idea and get back to you soon.</p>
        </CardContent>
        <CardFooter className="justify-center">
          <Link href="/">
            <Button variant="outline">Back to Homepage</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
