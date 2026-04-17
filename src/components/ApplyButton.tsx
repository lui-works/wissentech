'use client'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function ApplyButton({ children, className = '' }: Props) {
  function open() {
    window.dispatchEvent(new CustomEvent('open-apply-modal'))
  }

  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  )
}
