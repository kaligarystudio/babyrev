import { notFound } from "next/navigation";

import { BabyShowerWelcome } from "@/components/baby-shower/BabyShowerWelcome";
import { getBabyShowerBySlug } from "@/lib/db/baby-showers";

interface BabyShowerPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function BabyShowerPage({
  params
}: BabyShowerPageProps) {
  const { slug } = await params;

  const babyShower = await getBabyShowerBySlug(slug);

  if (!babyShower) {
    notFound();
  }

  return (
    <BabyShowerWelcome
      babyName={babyShower.babyName}
      parentsName={babyShower.parentsName}
      eventDate={babyShower.eventDate}
      eventTime={babyShower.eventTime}
      location={babyShower.location}
      message={babyShower.message}
      primaryColor={babyShower.primaryColor}
      secondaryColor={babyShower.secondaryColor}
    />
  );
}
