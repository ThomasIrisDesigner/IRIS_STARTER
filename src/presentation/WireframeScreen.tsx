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
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
      <div className="flex justify-center lg:justify-start">
        <Mockup screenTitle={title}>{children}</Mockup>
      </div>
      <div className="flex min-w-0 flex-col gap-3 lg:pt-1">
        <h2 className={typography.wireframeTitleCompact}>{title}</h2>
        <ol className="space-y-2.5">
          {annotations.map((item) => (
            <li key={item.number} className="flex gap-3">
              <span className={typography.annotationNumber} aria-hidden>
                {item.number}
              </span>
              <div className="min-w-0 space-y-0.5">
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
