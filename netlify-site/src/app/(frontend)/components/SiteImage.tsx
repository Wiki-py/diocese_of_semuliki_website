"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"
import { ChurchLoader } from "./ChurchLoader"

function placeholder(alt: string) {
  const label = alt.replace(/[&<>"']/g, (character) => {
    return `&#${character.charCodeAt(0)};`
  })
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"><rect width="600" height="400" fill="#e9e6dd"/><path d="M260 140h80m-40-40v80" stroke="#697567" stroke-width="4"/><text x="300" y="225" text-anchor="middle" fill="#354637" font-family="Georgia,serif" font-size="22">${label}</text><text x="300" y="260" text-anchor="middle" fill="#596458" font-family="sans-serif" font-size="16">Image unavailable</text></svg>`,
  )}`
}

export default function SiteImage({
  src,
  alt,
  fill,
  className,
  onLoad,
  onError,
  ...props
}: ImageProps) {
  const [failedSource, setFailedSource] = useState<ImageProps["src"] | null>(null)
  const [loadedSource, setLoadedSource] = useState<ImageProps["src"] | null>(null)
  const failed = failedSource === src
  const loaded = loadedSource === src || failed

  return (
    <span
      aria-busy={!loaded}
      className={`site-image-frame${fill ? " site-image-frame--fill" : ""}`}
      data-loaded={loaded ? "true" : undefined}
    >
      <Image
        {...props}
        alt={failed ? `${alt} — image unavailable` : alt}
        className={className}
        fill={fill}
        src={failed ? placeholder(alt) : src}
        unoptimized={failed || props.unoptimized}
        onError={(event) => {
          if (!failed) setFailedSource(src)
          onError?.(event)
        }}
        onLoad={(event) => {
          setLoadedSource(src)
          onLoad?.(event)
        }}
      />
      {!loaded && (
        <span className="site-image-loader" aria-hidden="true">
          <ChurchLoader decorative />
        </span>
      )}
    </span>
  )
}
