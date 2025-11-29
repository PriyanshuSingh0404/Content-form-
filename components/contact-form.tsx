"use client"

import type React from "react"

import { useState } from "react"
import { Check, AlertCircle, Loader2 } from "lucide-react"
import { FloatingInput } from "@/components/floating-input"
import { FloatingTextarea } from "@/components/floating-textarea"
import { Button } from "@/components/ui/button"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors above",
      })
      return
    }

    setIsLoading(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" })
      }, 5000)
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        <FloatingInput
          id="name"
          name="name"
          type="text"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          disabled={isLoading}
        />

        <FloatingInput
          id="email"
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          disabled={isLoading}
        />

        <FloatingInput
          id="subject"
          name="subject"
          type="text"
          label="Subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          disabled={isLoading}
        />

        <FloatingTextarea
          id="message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          disabled={isLoading}
          rows={5}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-11 text-base font-medium transition-all duration-200"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      {submitStatus.type && (
        <div
          className={`flex items-start gap-3 p-4 rounded-lg border transition-all duration-300 ${
            submitStatus.type === "success"
              ? "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-900"
              : "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-900"
          }`}
        >
          {submitStatus.type === "success" ? (
            <Check className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          )}
          <p
            className={`text-sm font-medium ${
              submitStatus.type === "success" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"
            }`}
          >
            {submitStatus.message}
          </p>
        </div>
      )}
    </div>
  )
}
