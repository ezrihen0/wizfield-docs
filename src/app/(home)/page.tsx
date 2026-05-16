import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 max-w-2xl mx-auto px-6">
      <p className="text-sm font-medium text-fd-muted-foreground mb-3">WizField Docs</p>
      <h1 className="text-3xl font-bold mb-4">Public knowledge for WizField users</h1>
      <p className="text-fd-muted-foreground mb-6">
        WizField Docs explains product behavior, onboarding, workflows, and boundaries for
        product users, buyers, and operators.
      </p>
      <p>
        <Link href="/docs" className="font-medium underline">
          Open the docs
        </Link>
      </p>
    </div>
  );
}
