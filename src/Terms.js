import { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Terms() {
  useEffect(() => {
    document.title = "Useless Bot Terms of Service";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 min-h-screen">
        <Nav />
        <main className="max-w-4xl mx-auto p-6 text-white">
          <h1 className="text-4xl font-bold text-center text-pink-400">Terms of Service</h1>
          <p className="text-gray-300 mt-4">
          By inviting Useless Bot or using Useless Bot on any Discord server, you agree that you have read, understood, and accepted these terms. Server admins or owners are also responsible for informing the members in their Discord server about these terms. You may not use our services for any illegal or unautorized purpose. You are soley responsible for your use of our service and for any consequenses therefore. If you disagree with any of these terms, you are not allowed to use or add Useless Bot to any Discord server.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-pink-400">Availability and Errors</h2>
            <p className="text-gray-300 mt-2">
            Useless Bot is provided as is. There are no guarantees that it will be available in the future, and its purpose or availability may be changed at any time. User data may be deleted at any time or after a year of not using Useless Bot. User data is not transferable between Discord accounts. Any command availability are not guaranteed. They may be changed or revoked at any time. Access to any feature of Useless Bot may be revoked at any time.
            </p>
            <p className="text-gray-300 mt-2">
            We are constantly updating commands in Useless Bot. We may experience delays in updating information about the commands on Useless Bot or on other websites. Information found on these commands may contain errors and may not be complete. Commands may be described inaccurately or unavailable and we cannot guarantee the accuracy or completeness of any information on Useless Bot. We therefore reserve the right to change or update information and to correct errors at any time without prior notice.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-pink-400">Service Quality</h2>
            <p className="text-gray-300 mt-2">
            We continue to update our services and improve them. However we are not liable if the results of our services accuracy, reliability or quality of the service. We are not liable for anything the AI Chat or AI Image generates based on your inputs. We are also not liable for any other service results based on your inputs.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-pink-400">Contact Us</h2>
            <p className="text-gray-300 mt-2">
            If you have any questions about our Terms of Service, please contact us on our Discord server:
              <a href="https://discord.com/invite/zsUuNxf" className="text-pink-400"> Discord Server</a>.
            </p>
          </section>

          <p className="text-gray-500 mt-12 text-center">Last Updated: August 24th, 2024</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}