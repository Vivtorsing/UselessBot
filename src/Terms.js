import { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Terms() {
  useEffect(() => {
    document.title = "Useless Bot Terms of Service";
  }, []);

  return (
    <div>
      <div>
        <Nav />
        <main>
          <h1>Terms of Service</h1>
          <p>
          By inviting Useless Bot or using Useless Bot on any Discord server, you agree that you have read, understood, and accepted these terms. Server admins or owners are also responsible for informing the members in their Discord server about these terms. You may not use our services for any illegal or unautorized purpose. You are soley responsible for your use of our service and for any consequenses therefore. If you disagree with any of these terms, you are not allowed to use or add Useless Bot to any Discord server.
          </p>

          <section>
            <h2>Availability and Errors</h2>
            <p>
            Useless Bot is provided as is. There are no guarantees that it will be available in the future, and its purpose or availability may be changed at any time. User data may be deleted at any time or after a year of not using Useless Bot. User data is not transferable between Discord accounts. Any command availability are not guaranteed. They may be changed or revoked at any time. Access to any feature of Useless Bot may be revoked at any time.
            </p>
            <p>
            We are constantly updating commands in Useless Bot. We may experience delays in updating information about the commands on Useless Bot or on other websites. Information found on these commands may contain errors and may not be complete. Commands may be described inaccurately or unavailable and we cannot guarantee the accuracy or completeness of any information on Useless Bot. We therefore reserve the right to change or update information and to correct errors at any time without prior notice.
            </p>
          </section>

          <section>
            <h2>Service Quality</h2>
            <p>
            We continue to update our services and improve them. However we are not liable if the results of our services accuracy, reliability or quality of the service. We are not liable for anything the AI Chat or AI Image generates based on your inputs. We are also not liable for any other service results based on your inputs.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
            If you have any questions about our Terms of Service, please contact us on our Discord server:
              <a href="https://discord.com/invite/zsUuNxf"> Discord Server</a>.
            </p>
          </section>

          <p>Last Updated: August 24th, 2024</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}