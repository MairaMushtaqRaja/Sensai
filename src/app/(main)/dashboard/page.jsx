import React from 'react'
import { getUserOnboardingStatus } from '@/actions/user';
import { getIndustryInsights } from '@/actions/dashboard';
import { redirect } from 'next/navigation';
import DashboardView from './_components/dashboard-view';
const IndustryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding")
  }

  const insights = await getIndustryInsights();

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights}></DashboardView>
    </div>
  )
}

export default IndustryInsightsPage