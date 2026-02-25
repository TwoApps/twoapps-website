import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center py-20">
      <Container>
        <Card className="mx-auto max-w-2xl p-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent-1">404</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold sm:text-5xl">
            This page does not exist
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
            The route may have moved, or the URL may be incorrect. Use the homepage to continue exploring services and partner offerings.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/">Go home</Button>
            <Button href="/contact" variant="secondary">
              Contact Two Apps
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
