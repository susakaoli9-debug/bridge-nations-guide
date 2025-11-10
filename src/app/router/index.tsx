import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/shared/components/layout/Layout';
import HomePage from '@/features/home/pages/HomePage';
import AboutPage from '@/features/about/pages/AboutPage';
import ServicesPage from '@/features/services/pages/ServicesPage';
import DestinationsPage from '@/features/destinations/pages/DestinationsPage';
import ContactPage from '@/features/contact/pages/ContactPage';
import BlogPage from '@/features/blog/pages/BlogPage';
import GalleryPage from '@/features/gallery/pages/GalleryPage';
import ResourcesPage from '@/features/resources/pages/ResourcesPage';
import NewsPage from '@/features/news/pages/NewsPage';
import FAQPage from '@/features/faq/pages/FAQPage';
import NotFoundPage from '@/features/not-found/pages/NotFoundPage';

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/destination" element={<DestinationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
