import Navbar from "../../components/Navbar";
import FeatureCard from "../../components/FeatureCard";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import quranbg from "../../assets/quran4.jpg";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      title: "Customized Timing",
      description: "Set flexible times to meet your Ustaz that align with your personal memorization schedule.",
      icon: "🕒",
    },
    {
      title: "Perfect Your Tajwīd",
      description: "Learn and refine your pronunciation with expert guidance to ensure flawless recitation.",
      icon: "📜",
    },
    {
      title: "Motivational Peer Sessions",
      description: "Connect with students worldwide to revise together, inspire, and listen to each other’s recitation.",
      icon: "🤝",
    },
    {
      title: "Physical Meetings",
      description: "Join local study circles and physical gatherings for deeper engagement and connection.",
      icon: "🏫",
    },
    {
      title: "Certification & Recognition",
      description: "Earn official certificates from recognized scholars upon completing your revision milestones.",
      icon: "🏅",
    },
    {
      title: "Progress Tracking & Reminders",
      description: "Stay consistent with daily progress insights, reminders, and gentle motivation to stay on track.",
      icon: "📈",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden font-sans bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-screen text-center"
        style={{
          backgroundImage: `url(${quranbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6 md:px-20"
        >
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl drop-shadow-xl">
            Revise Qur’an <span className="text-yellow-400">Together</span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-200 md:text-2xl">
            Join a community of students, teachers, and huffāẓ to rehearse,
            strengthen, and perfect your memorization with purpose.
          </p>

          <div className="flex flex-col justify-center gap-5 md:flex-row">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold text-green-900 transition-all duration-300 bg-yellow-400 rounded-full hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-200/40"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold text-yellow-300 transition-all duration-300 border-2 border-yellow-400 rounded-full hover:bg-yellow-300 hover:text-green-900"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-100">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-white to-green-50 opacity-40"></div>
        <div className="relative z-10 px-6 mx-auto text-center max-w-7xl">
          <h2 className="mb-16 text-4xl font-bold text-gray-900 md:text-5xl">
            Why Choose <span className="text-green-700">Murājaʿah?</span>
          </h2>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 1.5 : -1.5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="transition-all duration-300 transform cursor-pointer"
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden text-center text-white bg-gradient-to-b from-green-700 to-green-800">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-700 opacity-90"></div>
        <div className="relative z-10">
          <h2 className="mb-8 text-3xl font-bold md:text-5xl">
            Ready to Strengthen Your Qur’an Connection?
            
          </h2>
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold text-green-900 transition-all duration-300 bg-yellow-400 rounded-full hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/40"
          >
            Join Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
