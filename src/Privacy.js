import { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Privacy() {
  useEffect(() => {
    document.title = "Useless Bot Privacy Policy";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 min-h-screen">
        <Nav />
        <main className="max-w-4xl mx-auto p-6 text-white">
          <h1 className="text-4xl font-bold text-center text-pink-400">Privacy Policy</h1>
          <p className="text-gray-300 mt-4">
          This page informs you of our Privacy Policies regarding the collection, and use of personal data when you use Useless Bot. We use your data to improve Useless Bot. By using Useless Bot, and registering for economy commands, you agree to the collection and use of information in accordance with this policy.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-pink-400">Information Collection and Use</h2>
            <p className="text-gray-300 mt-2">
            We collect several different types of information for various purposes to provide and improve Useless Bot for you.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-pink-400">Types of Data Collected</h2>
            <p className="text-gray-300 mt-2">
            Personal Data: While using Useless Bot we may collect your user id as personal identification.
            </p>
            <p className="text-gray-300 mt-2">
            Usage Data: We may collected information on when a command is used and how many times you use a command.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-pink-400">Use of Data</h2>
            <p className="text-gray-300 mt-2">
            We collect data for various purposes: To provide commands, To gather analysis to improve Useless Bot, To monitor the use of Useless Bot, and to detect issues and to fix them.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-pink-400">Retention of Data</h2>
            <p className="text-gray-300 mt-2">
            We will retain your Personal Data for as long as you use Useless Bot. You are allowed to delete your data at any time using the register command and pressing the delete button three times. If you do not use Useless Bot for a year, your data will automatically be deleted. Deleted data cannot be restored at any time.
            </p>
            <p className="text-gray-300 mt-2">
            We will also retain Usage Data for analysis purposes for as long as you use Useless Bot commands. You are also allowed to delete your data at any time using the register command and pressing the delete button three times. Your Usage Data will also be deleted if you do not use Useless Bot for a year. Deleted data cannot be restored at any time.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-pink-400">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mt-2">
            We may update our Privacy Policy from time to time. We may try to attempt to notify you of any changes by posting new Privacy Policy on this page. We may try to let you know by our Discord Server or by Useless Bot commands. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-pink-400">Contact Us</h2>
            <p className="text-gray-300 mt-2">
            If you have any questions about our Terms of Service, please contact us on our Discord server:
              <a href="https://discord.com/invite/zsUuNxf" className="text-pink-400"> Discord Server</a>.
            </p>
          </section>

          <p className="text-gray-500 mt-12 text-center">Last Updated: September 3rd, 2022</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}