import type { ReactNode } from "react"

import { BrowserMockup } from "@/presentation/BrowserMockup"
import { PhoneMockup } from "@/presentation/PhoneMockup"
import { typography } from "@/styles/typography"

export type WireframeAnnotation = {
  number: number
  label: string
  description: string
}

type WireframeScreenProps = {
  title: string
  device: "mobile" | "desktop"
  annotations: WireframeAnnotation[]
  children: ReactNode
}

export function WireframeScreen({
  title,
  device,
  annotations,
  children,
}: WireframeScreenProps) {
  const Mockup = device === "mobile" ? PhoneMockup : BrowserMockup

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
      <div className="flex justify-center lg:justify-start">
        <Mockup screenTitle={title}>{children}</Mockup>
      </div>
      <div className="space-y-6">
        <div>
          <h2 className={typography.wireframeTitle}>{title}</h2>
        </div>
        <ol className="space-y-5">
          {annotations.map((item) => (
            <li key={item.number} className="flex gap-4">
              <span className={typography.annotationNumber} aria-hidden>
                {item.number}
              </span>
              <div className="min-w-0 space-y-1">
                <p className={typography.annotationLabel}>{item.label}</p>
                <p className={typography.annotationDescription}>
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
