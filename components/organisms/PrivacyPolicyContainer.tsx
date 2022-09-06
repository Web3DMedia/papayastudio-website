import styled from 'styled-components'
import BgTransfromation from '../atoms/BgTransfromation'

const UnorderedList = styled.ul`
   list-style-type: disc !important;
   padding-left: 20px;
   margin-left: 10px;

   li{
      position: relative;
   }

`


const TextWrapper = styled.div`
   @media screen and (max-width:1024px){
      h2,p,li{
         font-size: 14px !important;
      }
   }

   @media screen and (max-width:375px){
      h2,p,li{
         font-size: 13px !important;
      }
   }
`
const BackContainer = styled.div`
box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1);
`
const PrivacyPolicyContainer = () => {
   return (
      <div className=" min-h-[60vh] mb-5 flex flex-col items-center justify-center">
         <BgTransfromation></BgTransfromation>
         <h3 className="text-[#002F31] font-normal text-xs uppercase my-5">Legal</h3>
         <div className="bg-white my-7 rounded-t-[32px]  md:px-10">
            <BackContainer className='absolute bg-white w-[770px] z-10 md:-ml-10 rounded-t-[32px] bg-white w-[729px] py-5'>
               <h1 className='pt-[40px] ml-10 text-[#002F3199] cursor-light font-normal text-[18px] leading-6' onClick={() => history.back()}>&#8592; Back</h1>
            </BackContainer>
            <TextWrapper className="customInfoWrapper h-full md:w-[650px] lg:h-[680px] max-h-[680px] pb-10 mx-5 pl-2 pr-12 pb-10 md:px-5 md:mx-0 xl:px-[60px] relative overflow-y-scroll overflow-x-hidden mt-28">
               <h3 className="font-bold text-[30px] lg:text-[36px] xl:text-[40px] text-[#002F31] mt-10">Privacy Policy</h3>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Last updated: May, 2022
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
               </p>

               <h2 className="font-bold my-4 text-base text-[#4A5567]">
                  Interpretation and Definitions
               </h2>

               <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                  Interpretation
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
               </p>
               <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                  Definitions
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  For the purposes of this Privacy Policy:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Company</strong> (referred to as either {`"the Company", "We", "Us" or "Our"`} in this Agreement) refers to Web3D Media Incorporated, 651 N Broad St. Middletown, New Castle.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Country</strong> refers to: Delaware, United States
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Service</strong> refers to the Website.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Website</strong> refers to Blocasset, accessible from <span className='text-[#FF6661]'>https://papayas.studio/ </span>
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </li>
               </UnorderedList>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Collecting and Using Your Personal Data
               </p>
               <p className="font-bold mb-4 text-base text-[#4A5567]">
                  Types of Data Collected
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Personal Data
               </p>
               <p className="font-medium text-base text-[#4A5567]">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Email address
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     First name and last name
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Phone number
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Address, State, Province, ZIP/Postal code, City
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Usage Data
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Name and address of the business
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Bank account details and crypto payment details
                  </li>
               </UnorderedList>

               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Usage Data
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Usage Data is collected automatically when using the Service.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Usage Data may include information such as Your{` Device's`} Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Tracking Technologies and Cookies
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Flash Cookies. Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read {`"Where can I change the settings for disabling, or deleting local shared objects?"`} available at <span className='text-[#FF6661] break-all'>https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_</span>
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                  </li>
               </UnorderedList>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  <strong>Cookies</strong> can be {`"Persistent"`} or {`"Session"`} Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies: Use of Cookies by Free Privacy Policy.
               </p>
               <p className="font-medium mt-4 text-base text-[#4A5567]">
                  We use both Session and Persistent Cookies for the purposes set out below:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Necessary / Essential Cookies</strong><br></br>
                     <p className="font-medium pl-2 text-base text-[#4A5567]">
                        Type: Session Cookies<br></br>
                        Administered by: Us<br></br>
                        Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                     </p>
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Cookies Policy / Notice Acceptance Cookies</strong><br></br>
                     <p className="font-medium pl-2 text-base text-[#4A5567]">
                        Type: Persistent Cookies<br></br>
                        Administered by: Us<br></br>
                        Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                     </p>
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>Functionality Cookies</strong><br></br>
                     <p className="font-medium pl-2 text-base text-[#4A5567]">
                        Type: Persistent Cookies<br></br>
                        Administered by: Us<br></br>
                        Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                     </p>
                  </li>
               </UnorderedList>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Use of Your Personal Data
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The Company may use Personal Data for the following purposes:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong> To provide and maintain our Service</strong>, including to monitor the usage of our Service.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong> To manage Your Account</strong>: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>For the performance of a contract</strong>: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>To contact You</strong>: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile {`application's`} push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>To manage Your requests</strong>: To attend and manage Your requests to Us.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     <strong>For business transfers</strong>: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                  </li>
               </UnorderedList>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  We may share Your personal information in the following situations:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     With Your consent: We may disclose Your personal information for any other purpose with Your consent.
                  </li>
               </UnorderedList>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Retention of Your Personal Data
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
               </p>

               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Transfer of Your Personal Data
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Your information, including Personal Data, is processed at the {`Company's`} operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on— computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
               </p>
               <p className="font-bold my-4 text-base text-[#4A5567]">
                  Disclosure of Your Personal Data
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Business Transactions
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Law enforcement
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Other legal requirements
               </p>
               <p className="font-medium text-base text-[#4A5567]">
                  The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Comply with a legal obligation
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Protect and defend the rights or property of the Company
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Prevent or investigate possible wrongdoing in connection with the Service
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Protect the personal safety of Users of the Service or the public
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Protect against legal liability
                  </li>
               </UnorderedList>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Security of Your Personal Data
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  International Privacy Laws
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Please be advised that if you access the Services from outside the New York, United States (NY, US), you are transmitting information (including Personal Data) to NY, US, where our servers are located. Depending on the type of information and how it is maintained by us, it may be transmitted within the United States or back out of the United States to countries outside of your place of residence. These countries may not have data protection regulations as comprehensive or protective as those in your own country; however, this Privacy Policy will always govern our collection, storage, and use of your Personal Data
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  For EEA, SWITZERLAND AND UK ONLY
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The EU General Data Protection Regulation (GDPR) requires Blocasset to give Users greater information regarding the processing of their Personal Data. Therefore in addition to the information in this section, and in line with the provisions of the GDPR, you should be aware that we are processing your information because:
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  You gave us your consent; the processing is required for our contractual relationship; the processing is required for us to comply with our legal or regulatory requirements; and/or the processing is in our legitimate interest as an event organizer (for example, to protect the security and integrity of our systems and to provide you with the right values, etc.).
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Personal Data Transfers
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  We may need to move your Personal Data outside of the country from which it was originally submitted because Blocasset is a worldwide company. This may be intra-group or to third parties with which we collaborate who are located in jurisdictions outside the EEA, Switzerland, and the United Kingdom, which have no or less stringent data protection legislation than those in Europe.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  We take legally needed efforts to ensure that sufficient safeguards are in place to secure your Personal Data if we move it outside of the EEA, Switzerland, or the United Kingdom. This includes the adoption of Standard Contractual Clauses approved by the European Parliament and the Council in accordance with Commission Implementing Decision (EU) 2021/914 of June 4, 2021.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Retention of Personal Data
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  We keep your Personal Data for as long as it’s needed or for other vital reasons including complying with legal responsibilities, resolving disputes, or enforcing our agreements.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  If you have an account with us, we will normally keep your Personal Data for ninety (90) days after you request that it be closed or for seven (7) years if it has been dormant.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Your legal rights.
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  You have the right under data protection law to obtain a copy of the Personal Data we hold about you, to request that we amend, restrict, or delete your Personal Data, to object to profiling, and to unsubscribe from marketing communications.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  For the most part, you can exercise these rights by changing your browser’s “cookie settings” (for more information, see our Cookie Statement); or contacting us through the means listed on our website. Please note that we will evaluate requests to exercise data protection rights on a case-by-case basis.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Because of the regulations in your country or the exemptions available in data protection legislation, we may not be legally compelled to comply with your request in some cases. If you have a problem about how we treat your Personal Data, please contact us using the information channels displayed on our website to clarify your situation. If you are dissatisfied with how we handled your issue, you may file a complaint with the appropriate data protection authority.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Papaya Studios as a data controller and a data processor
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Organizations that process personal data for their own purposes (known as “data controllers”) and organizations that process personal data on behalf of other organizations are distinguished under EU data protection law (known as “data processors”). If you have a concern or a complaint about how your Personal Data is handled, you should always direct it to the relevant data controller, since they are the ones who are in charge of it.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Depending on the circumstances, Papaya Studios may operate as a data controller or a data processor in relation to your Personal Data.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  {`Children's`} Privacy
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your {`parent's`} consent before We collect and use that information.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Links to Other Websites
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third {`party's`} site. We strongly advise You to review the Privacy Policy of every site You visit.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Changes to this Privacy Policy
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the {`"Last updated"`} date at the top of this Privacy Policy.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
               </p>
               <p className="font-bold mt-4 text-base text-[#4A5567]">
                  Contact Us
               </p>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  If you have any questions about this Privacy Policy, You can contact us:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     By email: hello@web3d.media
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     By visiting this page on our website:https://papayas.studio
                  </li>
               </UnorderedList>

            </TextWrapper>
         </div>
      </div>
   )
}

export default PrivacyPolicyContainer