import { Layout } from "@/components/layout"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and Apple Pay. For your convenience, you can also pay with Shop Pay or Google Pay at checkout.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused and unworn items. Please refer to our Returns & Exchanges page for more detailed information on how to initiate a return.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination. You can see the exact shipping cost at checkout.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's site.",
  },
  {
    question: "Are your products sustainable?",
    answer:
      "We are committed to sustainability and are continuously working to improve our practices. Many of our products are made from eco-friendly materials, and we're always expanding our sustainable offerings.",
  },
]

export default function FAQPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  )
}

