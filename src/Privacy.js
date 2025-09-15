import { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Privacy() {
  useEffect(() => {
    document.title = "Useless Bot Privacy Policy";
  }, []);

  return (
    <div>
      <div>
        <Nav />
        <main>
          <h1>Privacy Policy</h1>
          <p>
          This page informs you of our Privacy Policies regarding the collection, and use of personal data when you use Useless Bot. We use your data to improve Useless Bot. By using Useless Bot, and registering for economy commands, you agree to the collection and use of information in accordance with this policy.
          </p>

          <section>
            <h2>Information Collection and Use</h2>
            <p>
            We collect several different types of information for various purposes to provide and improve Useless Bot for you.
            </p>
          </section>

          <section>
            <h2>Types of Data Collected</h2>
            <p>
            Personal Data: While using Useless Bot we may collect your user id as personal identification.
            </p>
            <p>
            Usage Data: We may collected information on when a command is used and how many times you use a command.
            </p>
          </section>

          <section>
            <h2>Use of Data</h2>
            <p>
            We collect data for various purposes: To provide commands, To gather analysis to improve Useless Bot, To monitor the use of Useless Bot, and to detect issues and to fix them.
            </p>
          </section>

          <section>
            <h2>Retention of Data</h2>
            <p>
            We will retain your Personal Data for as long as you use Useless Bot. You are allowed to delete your data at any time using the register command and pressing the delete button three times. If you do not use Useless Bot for a year, your data will automatically be deleted. Deleted data cannot be restored at any time.
            </p>
            <p>
            We will also retain Usage Data for analysis purposes for as long as you use Useless Bot commands. You are also allowed to delete your data at any time using the register command and pressing the delete button three times. Your Usage Data will also be deleted if you do not use Useless Bot for a year. Deleted data cannot be restored at any time.
            </p>
          </section>

          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>
            We may update our Privacy Policy from time to time. We may try to attempt to notify you of any changes by posting new Privacy Policy on this page. We may try to let you know by our Discord Server or by Useless Bot commands. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
            If you have any questions about our Terms of Service, please contact us on our Discord server:
              <a href="https://discord.com/invite/zsUuNxf"> Discord Server</a>.
            </p>
          </section>

          <p>Last Updated: September 3rd, 2022</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}