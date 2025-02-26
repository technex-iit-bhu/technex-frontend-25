"use client";
import React from "react";
import Image from "next/image";

export default function GuidelinesContent() {
  return (
    <div
      className="w-full max-w-4xl mx-auto p-4 md:p-8 text-white"
      style={{
        fontFamily: "'Bahnschrift', 'Courier New', monospace",
        backgroundColor: "#2c2c2c",
        border: "4px solid #694b1f",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      {/* Main Heading */}
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center uppercase" style={{ letterSpacing: "2px" }}>
        Technex&apos;25 Hospitality Guidelines
      </h1>

      <div className="space-y-4 text-sm md:text-base leading-relaxed">
        <p>
          Participants will receive mattresses along with additional amenities, including pillows and mattress covers. Any participant wishing to
          have blankets is kindly advised to bring their own.
        </p>
        <p>
          All participants are advised to proceed to the front of{" "}
          <a href="https://maps.app.goo.gl/7Qzvj1Zp6b36i8bFA" className="underline text-blue-300" target="_blank" rel="noreferrer">
            Rajputana Hostel
          </a>{" "}
          upon arriving at the campus.
        </p>
        <p>
          All guests must possess valid physical student photo ID proofs duly authorized by their respective colleges, accompanied by a physical
          Aadhar card, and maintain possession of these documents at all times. Entry to the campus will strictly be denied in the absence of a
          valid ID card.
        </p>
        <p>
          Desk sales for any cards will not be available. Participants desiring any cards are encouraged to make their selections in advance before
          the commencement of the fest.
        </p>
        <p>
          Accommodation in the common halls of hostels at IIT (BHU) Varanasi will be provided from <b>27th Feb 2025 (07:00 PM)</b> to{" "}
          <b>3rd March 2025 (up to 10:00 AM)</b>.
        </p>
        <p>
          The final winners and prize money allocation will be decided solely by the Technex authority, and their decision shall be final and
          binding, ensuring fairness and transparency with no scope for disputes or revisions.
        </p>
      </div>

      {/* Travel Section */}
      <div className="mt-8 space-y-4 text-sm md:text-base">
        <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase">Reaching Varanasi</h2>
        <p className="text-gray-200">
          Varanasi boasts a well-organized and efficient transportation system, encompassing taxis, auto-rickshaws, cabs, and buses.
        </p>
        <div className="ml-4 space-y-2">
          <p>
            <b>By Air:</b> Lal Bahadur Shastri International Airport, situated in Babatpur (approximately 26 km from Varanasi), serves as the main
            airport. It is around 35 km from the airport to IIT (BHU) campus.
          </p>
          <p>
            <b>By Train:</b> The city has three major railway stations:
            <ul className="list-disc ml-6">
              <li>
                Pandit Deen Dayal Upadhyaya Junction (DDU) - ~22 km away from IIT (BHU) Varanasi campus.
              </li>
              <li>Varanasi Junction (BSB) - ~12 km away from IIT (BHU) Varanasi campus.</li>
              <li>Banaras Junction (BSBS) - ~8 km away from IIT (BHU) Varanasi campus.</li>
            </ul>
          </p>
          <p>
            <b>By Bus/Outstation Cabs:</b> Varanasi is well-connected by outstation bus and cab services, linking the city with numerous major
            cities.
          </p>
        </div>
      </div>

      {/* Accommodation Guidelines */}
      <div className="mt-8 space-y-4 text-sm md:text-base">
        <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase">Accommodation Guidelines</h2>
        <p>
          Participants will be supplied with mattresses, and additional amenities such as pillows, mattress covers. Blankets will be provided as
          needed.
        </p>
        <p>
          Upon checkouts, Participants are expected to return all provided items in good condition for seamless operations.
        </p>
        <p>All visitors are required to maintain the campus&apos;s decorum and cleanliness while strictly adhering to its policies at all times.</p>
        <p>
          Random checks will be conducted to prevent unauthorized stays on campus. Failure to present electronic or paper lodging receipts during
          these checks will result in penalties and disqualification for the respective teams.
        </p>
        <p>
          All guests must possess valid physical student photo ID proofs duly authorized by their respective colleges, accompanied by a physical
          government-issued ID card, and maintain possession of these documents at all times. Entry to the campus will strictly be denied in the
          absence of a valid ID card.
        </p>
        <p>
          The campus strictly prohibits the presence of alcohol, drugs, sharp objects, explosives, and any other items deemed hazardous. In case of
          disputes, the final decision rests with the Security team.
        </p>
        <p>Technex and IIT (BHU) Varanasi will not assume responsibility for any mishaps occurring during the stay.</p>
        <p>No outside vehicles will be allowed within the campus premises during the fest.</p>
        <p>
          Accommodation in the common halls of hostels at IIT (BHU) Varanasi will be provided from <b>27th Feb 2025 (07:00 PM)</b> to{" "}
          <b>3rd March 2025 (up to 10:00 AM)</b>.
        </p>
        <p>
          <b>Note:</b> Separate accommodation for boys and girls.
        </p>
      </div>

      {/* Food Guidelines */}
      <div className="mt-8 space-y-4 text-sm md:text-base">
        <h2 className="text-xl md:text-2xl font-bold mb-2 uppercase">Food Guidelines</h2>
        <p>
          During the registration payment, guests can opt to purchase food coupons for the entirety of their stay, as desk sales for food coupons
          will not be available. These coupons will provide access to the hostel mess featuring separate serving tables for Vegetarian and
          Non-Vegetarian options. Non-Vegetarian menu items will be available at an additional cost based on the mess facility.
        </p>
      </div>

      {/* Important Notes */}
      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-8 uppercase">Important Notes</h2>

      {/* Special Refund Guideline in Red */}
      <p className="text-red-500 text-center text-lg md:text-xl font-bold mt-8 px-2">
        Refunds are not possible. <br />
        However, in special cases, if you have a valid reason, please email the details to our Technex ID, and we will review your request.
      </p>

      {/* Additional Guidelines */}
      <div className="mt-8 space-y-4 text-sm md:text-base text-red-500">
        <p className="text-center text-lg md:text-xl font-bold">
          Entries in kaliedoscope and shows would be on the basis of first come first serve. It will be completely participant responsibility to grab his seat.
        </p>
      </div>
    </div>
  );
}