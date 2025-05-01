import React, { useState } from 'react';
import {
  MdPerson,
  MdLock,
  MdGavel,
  MdInfo,
  MdSettings,
  MdBarChart,
  MdContactMail
} from 'react-icons/md';

const Profile = () => {
  const [activePopup, setActivePopup] = useState(null);

  const closePopup = () => setActivePopup(null);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white pt-10 px-4 md:hidden">
      <main className="flex flex-col flex-1 rounded-xl p-4 max-w-md mx-auto text-center">

        {/* Profile Image & Name */}
        <div className="flex flex-col items-center mt-15">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <MdPerson size={48} className="text-gray-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Kartik</h2>
          <p className="text-sm text-gray-600">Balance: <span className="font-bold">₹0.00</span></p>
        </div>

        {/* Bottom icons */}
        <div className="mt-auto mb-25">
          {/* First Row */}
          <div className="mt-8 grid grid-cols-3 gap-20">
            <IconCard icon={MdLock} label="Privacy" onClick={() => setActivePopup('privacy')} />
            <IconCard icon={MdGavel} label="Terms" onClick={() => setActivePopup('terms')} />
            <IconCard icon={MdInfo} label="Guidelines" onClick={() => setActivePopup('guidelines')} />
          </div>

          {/* Second Row */}
          <div className="mt-6 grid grid-cols-3 gap-20">
            <IconCard icon={MdSettings} label="Settings" />
            <IconCard icon={MdBarChart} label="Stats" />
            <IconCard icon={MdContactMail} label="Contact" />
          </div>
        </div>
      </main>

      {/* Fullscreen Popup */}
      {activePopup && (
        <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto flex flex-col">
          <button onClick={closePopup} className="self-end text-sm text-blue-600 mb-4">✕</button>
          {activePopup === 'privacy' && <PrivacyContent />}
          {activePopup === 'terms' && <TermsContent />}
          {activePopup === 'guidelines' && <GuidelinesContent />}
        </div>
      )}
    </div>
  );
};

const IconCard = ({ icon: Icon, label, onClick }) => (
  <div className="flex flex-col items-center">
    <button
      onClick={onClick}
      className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shadow-sm hover:bg-blue-100 transition"
    >
      <Icon size={24} className="text-gray-700" />
    </button>
    <span className="mt-2 text-sm text-gray-700">{label}</span>
  </div>
);

// --- Content Components ---

const PrivacyContent = () => (
  <>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Privacy Policy</h2>
    <p className="text-gray-600 mb-4">
      We value your privacy. Our platform uses secure encryption to protect your financial and personal data.
      We do not share user data with third parties without consent. All trades and account activities are stored securely.
    </p>
    <p className="text-gray-600">
      By using this app, you agree to allow access to basic usage analytics to improve our services. No trading behavior or account balance details are shared externally.
    </p>
  </>
);

const TermsContent = () => (
  <>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Terms & Conditions</h2>
    <p className="text-gray-600 mb-4">
      This stock trading platform is for informational and educational purposes. Trades are executed through our broker partners and subject to market risk.
      By using the platform, you agree to follow regulatory guidelines and not engage in fraudulent activity.
    </p>
    <p className="text-gray-600">
      We reserve the right to suspend accounts showing suspicious activity. Use of the app implies acceptance of all applicable terms.
    </p>
  </>
);

const GuidelinesContent = () => (
  <>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Community Guidelines</h2>
    <p className="text-gray-600 mb-4">
      Respect fellow traders. Avoid spreading misinformation or promoting high-risk trades without context.
      Discussions should remain educational, factual, and helpful to all users.
    </p>
    <p className="text-gray-600">
      Do not share personal account details or impersonate others. Violations may lead to restricted access or permanent bans.
    </p>
  </>
);

export default Profile;
