import styled from 'styled-components'

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

const CookiePolicyContiner = () => {
   return (
      <div className=" min-h-[60vh] mb-5 flex flex-col items-center justify-center">
         <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft"/>
            <div className="bgTransformationOneRight"/>
         </div>
         <h3 className="text-[#002F31] font-normal text-xs uppercase my-5">Legal</h3>
         <div className="bg-white my-7 rounded-t-[32px]  md:px-10">
            <TextWrapper className="customInfoWrapper h-full md:w-[650px] lg:h-[680px] max-h-[680px] pb-10 px-10 xl:px-[60px] overflow-y-scroll">
                              <h1 className='pt-[40px] text-[#002F3199] cursor-pointer font-normal text-[18px] leading-6' onClick={() => history.back()}>&#8592; Back</h1>
               <h3 className="font-bold text-[30px] lg:text-[36px] xl:text-[40px] text-[#002F31] mt-10">Cookie Policy</h3>
               <h2 className="font-bold mb-4 text-base text-[#4A5567]">
                     Definitions and key terms
                  </h2>
                  <p className="font-medium mb-2 text-base text-[#4A5567]">
                     To help explain things as clearly as possible in this Cookie Policy, every time any of these terms are referenced, are strictly defined as:
                  </p>
                  <UnorderedList>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Cookie: small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to Papayas Studio, that is responsible for your information under this Cookie Policy.
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Device: any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Papayas Studio and use the services.
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Personal Data: any information that directly, indirectly, or in connection with other information including a personal identification number — allows for the identification or identifiability of a natural person.
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Service: refers to the service provided by Papayas Studio as described in the relative terms (if available) and on this platform.
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Website: Papayas Studio.{`"’s"`} site, which can be accessed via this URL: http://papayas.studio
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        You: a person or entity that is registered with Papayas Studio to use the Services.
                     </li>
                  </UnorderedList>
                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Introduction
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     This Cookie Policy explains how Papayas Studio and its affiliates (collectively {`"Papayas Studio", "we", "us", and "ours"`}), use cookies and similar technologies to recognize you when you visit our website, including without limitation http://papayas.studio and any related URLs, mobile or localized versions and related domains / sub-domains ({`"Websites"`}). It explains what these technologies are and why we use them, as well as the choices for how to control them.
                  </p>

                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     What is a cookie?
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     A cookie is a small text file that is stored on your computer or other internet connected device in order to identify your browser, provide analytics, remember information about you such as your language preference or login information. {`They're`} completely safe and {`can't`} be used to run programs or deliver viruses to your device.
                  </p>

                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Why do we use cookies?
                  </h2>
                  <p className="font-medium mb-2 text-base text-[#4A5567]">
                     We use first party and/or third party cookies on our website for various purposes such as:
                  </p>
                  <UnorderedList>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        To facilitate the operation and functionality of our website;
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        To improve your experience of our website and make navigating around them quicker and easier;
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        To allow us to make a bespoke user experience for you and for us to understand what is useful or of interest to you;
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        To analyze how our website is used and how best we can customize it;
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        To identify future prospects and personalize marketing and sales interactions with it;
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        To facilitate the tailoring of online advertising to your interests.
                     </li>
                  </UnorderedList>

                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     What type of cookies does Papayas Studio use?
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     Cookies can either be session cookies or persistent cookies. A session cookie expires automatically when you close your browser. A persistent cookie will remain until it expires or you delete your cookies. Expiration dates are set in the cookies themselves; some may expire after a few minutes while others may expire after multiple years. Cookies placed by the website you’re visiting are called “first party cookies”.
                  </p>
                  <p className="font-medium my-4 text-base text-[#4A5567]">
                     Strictly Necessary cookies are necessary for our website to function and cannot be switched off in our systems. They are essential in order to enable you to navigate around the website and use its features. If you remove or disable these cookies, we cannot guarantee that you will be able to use our website.
                  </p>
                  <p className="font-medium my-4 text-base text-[#4A5567]">
                     We use the following types of cookies in our website:
                  </p>
                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Errors and Omissions Disclaimer
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     Papayas Studio is not responsible for any content, code or any other imprecision. Papayas Studio does not provide warranties or guarantees. In no event shall Papayas Studio be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other sort, arising out of or in connection with the use of the Service or the contents of the Service. Papayas Studio reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
                  </p>

                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     General Disclaimer
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     The Papayas Studio Service and its contents are provided {`"as is"`} and{`"as available"`} without any warranty or representations of any kind, whether express or implied. Papayas Studio is a distributor and not a publisher of the content supplied by third parties; as such, Papayas Studio exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability or currency of any information, content, service or merchandise provided through or accessible via the Papayas Studio Service. Without limiting the foregoing, Papayas Studio specifically disclaims all warranties and representations in any content transmitted on or in connection with the Papayas Studio Service or on sites that may appear as links on the Papayas Studio Service, or in the products provided as a part of, or otherwise in connection with, the Papayas Studio Service, including without limitation any warranties of merchantability, fitness for a particular purpose or non-infringement of third party rights. No oral advice or written information given by Papayas Studio or any of its affiliates, employees, officers, directors, agents, or the like will create a warranty. Price and availability information is subject to change without notice. Without limiting the foregoing, Papayas Studio does not warrant that the Papayas Studio Service will be uninterrupted, uncorrupted, timely, or error-free.
                  </p>

                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Essential Cookies
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     We use essential cookies to make our website work. These cookies are strictly necessary to enable core functionality such as security, network management, your cookie preferences and accessibility. Without them you {`wouldn't`} be able to use basic services. You may disable these by changing your browser settings, but this may affect how the Websites function.
                  </p>

                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Performance and Functionality Cookies
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality like videos may become unavailable or you would be required to enter your login details every time you visit the website as we would not be able to remember that you had logged in previously.
                  </p>

                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Marketing Cookies
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     These account-based marketing cookies enable us to identify future prospects and personalize sales and marketing interactions with them.
                  </p>

                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Analytics and Customization Cookies
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     These cookies collect information that is used to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
                  </p>
                  <p className="font-medium my-4 text-base text-[#4A5567]">
                     We use cookies served by Google Analytics to collect limited data directly from end-user browsers to enable us to better understand your use of our website. Further information on how Google collects and uses this data can be found at: https://www.google.com/policies/privacy/partners/. You can opt-out of all Google supported analytics on our Websites by visiting: https://tools.google.com/dlpage/gaoptout.
                  </p>
                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Advertising Cookies
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     These cookies collect information over time about your online activity on the website and other online services to make online advertisements more relevant and effective to you. This is known as interest-based advertising. They also perform functions like preventing the same ad from continuously reappearing and ensuring that ads are properly displayed for advertisers. Without cookies, it’s really hard for an advertiser to reach its audience, or to know how many ads were shown and how many clicks they received.
                  </p>

                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Social Media Cookies
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     These cookies are used when you share information using a social media sharing button or “like” button on our Site or you link your account or engage with our content on or through a social networking website such as Facebook, Twitter or Google+. The social network will record that you have done this. These cookies may also include certain code that has been placed on the platform to help track conversions from ads, optimize ads based on collected data, build targeted audiences for future ads, and remarket to qualified users who have already taken certain action on the platform.
                  </p>

                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Third Party Cookies
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     Some cookies that have been set on our website are not set on a first party basis by Papayas Studio. The Websites can be embedded with content from third parties to serve advertising. These third party service providers may set their own cookies on your web browser. Third party service providers control many of the performance and functionality, advertising, marketing and analytics cookies described above. We do not control the use of these third party cookies as cookies can only be accessed by the third party that originally set them.
                  </p>
                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     How you can manage cookies?
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     Most browsers allow you to control cookies through their {`'settings'`} preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information. Browser manufacturers provide help pages relating to cookie management in their products.
                  </p>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     Browser manufacturers provide help pages relating to cookie management in their products. Please see below for more information.
                  </p>
                  <UnorderedList>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Google Chrome
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Internet Explorer
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Mozilla Firefox
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Safari (Desktop)
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Safari (Mobile)
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Android Browser
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Opera
                     </li>
                     <li className="font-medium my-1 text-base text-[#4A5567]">
                        Opera Mobile
                     </li>
                  </UnorderedList>
                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Blocking and disabling cookies and similar technologies
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     Wherever {`you're`} located you may also set your browser to block cookies and similar technologies, but this action may block our essential cookies and prevent our website from functioning properly, and you may not be able to fully utilize all of its features and services. You should also be aware that you may also lose some saved information (e.g. saved login details, site preferences) if you block cookies on your browser. Different browsers make different controls available to you. Disabling a cookie or category of cookie does not delete the cookie from your browser, you will need to do this yourself from within your browser, you should visit your {`browser's`} help menu for more information.
                  </p>
                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Changes To Our Cookie Policy
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     We may change our Service and policies, and we may need to make changes to this Cookie Policy so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to this Cookie Policy and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Cookie Policy. If you do not want to agree to this or any updated Cookie Policy, you can delete your account.
                  </p>
                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Your Consent
                  </h2>
                  <p className="font-medium mb-4 text-base text-[#4A5567]">
                     By using our website, registering an account, or making a purchase, you hereby consent to our Cookie Policy and agree to its terms.
                  </p>
                  <h2 className="font-bold mt-4 text-base text-[#4A5567]">
                     Contact Us
                  </h2>
                  <p className="font-medium mb-1 text-base text-[#4A5567]">
                     {`Don't`} hesitate to contact us if you have any questions regarding our Cookie Policy.
                  </p>
                  <UnorderedList>
                     <li className="font-medium text-base text-[#4A5567]">
                        Via Email: info@web3d.media
                     </li>
                  </UnorderedList>
            </TextWrapper>
         </div>
      </div>
   )
}

export default CookiePolicyContiner