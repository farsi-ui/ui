import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function CarouselPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">چرخ‌فلک</h1>
        <p className="text-lg text-muted-foreground">نمایش محتوا به صورت اسلایدر قابل حرکت</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`<Carousel>
  <CarouselContent>
    <CarouselItem>اسلاید 1</CarouselItem>
    <CarouselItem>اسلاید 2</CarouselItem>
    <CarouselItem>اسلاید 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
          >
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-6">
                        <span className="text-4xl font-semibold">اسلاید {index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">نمایش چند آیتم</h2>
          <ComponentPreview
            code={`<Carousel>
  <CarouselContent className="-mr-4">
    <CarouselItem className="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>`}
          >
            <Carousel className="w-full max-w-2xl">
              <CarouselContent className="-mr-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3 pr-4">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
