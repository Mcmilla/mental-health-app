import Layout from "../components/Layout";
import React from "react";
import Hero from "../components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <Layout>
      <Hero />
      <Features />
      <CTA /> 
    </Layout>
  );
}
