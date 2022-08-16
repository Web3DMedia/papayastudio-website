import styled from 'styled-components'

const UnorderedList = styled.ul`
   list-style-type: disc !important;
   padding-left: 20px;
   margin-left: 10px;

   li{
      position: relative;
   }
`

const NumberedList = styled.ul`
   list-style-type:decimal;
   padding-left: 20px;
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


const TermsContainer = () => {
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
               <h3 className="font-bold text-[30px] lg:text-[36px] xl:text-[40px] text-[#002F31] mt-10">Terms and Condition</h3>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  This website is operated by Web3D Media Incorporated, a Delaware-based corporation with a registered address at 651 N Broad St, New Castle, Delaware United States. (“Company”).
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  These terms of use (“Terms”) govern the access, browsing and use by the users (“User” or “Users”, as applicable) of https://papayas.studio/, including any of its subdomains and/or sections (“Website”); as well as the services rendered through the Website (“Service” or “Services”, as applicable) which include the download and use of certain content.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Accessing and using the Website implies that the User has read and accepts to be bound by these Terms without exception. In case the User does not accept the Terms or have any objection to any part of the present Terms, the User must not use the Website.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Company may modify the Terms at any time and thus we recommend that the Terms are reviewed on a regular basis by the User. The date at the beginning of these Terms refers to the latest update of these Terms, which will be applicable from the date of publication.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Some Services provided through the Website may be subject to specific conditions or instructions that must be accepted by the User prior to the provision of the relevant Service.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  These specific conditions may be imposed by the Company or by third parties. Such specific conditions shall apply in addition to the Terms and, in case of conflict, shall supersede the Terms. Accordingly, the User must read and accept such specific conditions before the provision of the relevant Service.
                  Likewise, in respect of collection and processing of personal data, the Privacy Policy will apply.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  1. Services Offered
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Through the Website, the User can search visual content, like 3D vectors and illustrations, photos and images, PSDs and Photoshop files, vector icons, video contents and recordings (including the corresponding audio) in any format, as well as specific information related to such content.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Services may offer, in the result of that search, contents owned by the Company (“Papayas Studio Own Content”), contents owned by third parties offered through the Website (“Contributor Content”) as well as third-party content not offered free of charge (“Sponsored Content”). Sponsored Content is duly differentiated and identified on the search results. Papayas Studio Own Content and Contributor Content shall be hereinafter referred to collectively as the “Papayas Studio Content” and can be downloaded through the Website.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Service may also offer, in the result of a search completed by the User, content offered by third parties freely available through the Internet (“Third Party Content”). Likewise, among the Services offered, Users may also be allowed to upload content to the Website to store, publish and make it available to other Users as Contributor Content. The uploading of contents to the Website shall be done in the terms and following the procedure set out by the Company from time to time.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  2. Authorized Use
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The User is only authorized to use the Website and the Services in accordance with the Terms and in good faith. In particular and without limitation, Users (irrespective of whether they have purchased a Subscription or not) undertake that any access or downloads of any content available in the Website or through the Services will always be the result of a genuine legitimate interest of the User and acknowledges that any method which artificially increases the number of downloads, accesses or clicks over such content is strictly prohibited under these Terms (including, without limitation, the generation of downloads, accesses or clicks over such content through any robots, spiders or any other mechanism, mobile application, program or tool) and will result in the cancellation of the User’s account by the Company and the obligation for the User to indemnify the Company for all damages suffered as a result of the User’s breach of this undertaking.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User agrees not to use the Services negligently, for fraudulent purposes or in an unlawful manner. Likewise, the User agrees not to partake in any conduct or action that could damage the image, interests or rights of the Website or third parties, particularly, the owners of the Contributor Content, the Third Party Content or the Sponsored Content.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User will not interfere with the functioning of the Website or in the Services, in particular, he/she/it will not impersonate another user or person. The User agrees not to carry out any action that may damage, make unavailable, overload, deteriorate or impede the normal use of the Website or the Services, which may impact the security of the Website or the Services, or which may in any way interfere with the Services offered by the Company. 
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The use of robots, spiders or any other mechanism, mobile application, program or tool to access, copy or control any part of the Website or the Services in any way which is contrary to the ordinary use of the Website or which infringes the Company’s interests (without its express prior authorization) is strictly prohibited. Likewise, obtaining or attempting to obtain the contents of the Website using any method or system not expressly authorized by the Company or which is not the ordinary method of accessing the Website is also strictly prohibited.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  3. Registration
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  In order to use certain Services, the User must register, creating a username and password and activating an account. To this end, the User must provide a valid email address where the User will receive notifications related to the Services. If the User is a legal entity or business, its username must be its full name or corporate name and the person registering on behalf of the legal entity or business declares that he/she is duly authorized to bind such legal entity or business and that such legal entity or business shall be bound to these Terms.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User agrees to provide the mandatory information required for registration and also acknowledges that such information is true, complete and up to date. The User is solely responsible for keeping such information updated. Should the User provide false, outdated or incomplete information, or should the Company have reasons to suspect it, the Company reserves the right to suspend or cancel the User’s account.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User must protect and keep the account password confidential and must not disclose it to third parties. The User must neither allow other Users to access the Services through the User’s account nor use the account of another User to access the Services.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User is responsible for all operations carried out through the User’s account through any device. If the User suspects that another User is using his account, he/she/it should immediately inform the Company.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Company may suspend or cancel the User’s account if it considers that the User has breached these Terms.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  4. Content
               </h2>
               <p className="font-medium mb-2 text-base text-[#4A5567]">
                  The Services allow Users to:
               </p>
               <UnorderedList className="font-medium mb-4 text-base text-[#4A5567] list-disc">
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Search for content that may result in Papayas Studio Content and download such Papayas Studio Content.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Search for content that may result in Third Party Content and/or Sponsored Content, where available.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Upload Contributor Content for its storage, publishing and offer in the Website or through the Services, in the terms and following the procedure set out by the Company from time to time.
                  </li>
               </UnorderedList>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  If you have any question regarding any content or believe that it infringes any right, that it does not comply with these Terms, or that is inappropriate, you can do so by contacting the Company as indicated in these Terms or following the instructions provided on the Website for a copyright complaint.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  4.1 Third Party Content and Sponsored Content
               </h2>
               <p className="font-medium mb-2 text-base text-[#4A5567]">
                  Regarding Third Party Content and Sponsored Content, the Website’s role is limited to completing the search requested by the User and providing such content as a search result with a link to the relevant website together with specific related information. In some cases, in order to provide the User a better user experience and facilitate returning to the Services, the link can be presented within a frame corresponding to the Website, which can be removed by the User at any time.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Company is not the provider of the Third Party Content or the Sponsored Content and does not present itself as owner of such contents. Furthermore, displaying the search result and the link does not imply any relationship between the Company and the third party responsible for the Third Party Content or the Sponsored Content.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Company does not select, examine, control, guarantee, approve, sponsor or identify itself in any form with the Third Party Content or the Sponsored Content resulting of the searches made by the Users. The Third Party Content and the Sponsored Content are the sole responsibility of the third parties that make them available to the public over the Internet.<br></br>
                  The User will be able to access the corresponding third party websites and download Third Party Content and/or Sponsored Content under the terms and conditions established by such third parties. The Company shall not be a party or be involved in any way in the relationship between the User and the corresponding third party. The User undertakes to read and comply with the terms and conditions established by such third parties for the download and use of Third Party Content and/or Sponsored Content.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Company is not a party and does not take part in the relationship between the User and the third party that offers the Third Party Content or the Sponsored Content, and it is not directly or indirectly responsible for the performance, omissions, errors, negligence or breaches of the Users or such third parties. Any claim from the Users regarding the Third Party Content or the Sponsored Content must be addressed to the relevant third parties through the linked website.
               </p>

               <h2 className="font-bold text-base text-[#4A5567]">
                  4.2. Papayas Studio Own Content
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Papayas Studio Own Contents are offered under the conditions stated from time to time in the Website (including, without limitation, restrictions to the number of downloads per day) and its use is allowed in the terms set out or referred to in these Terms, as applicable.
               </p>

               <h2 className="font-bold text-base text-[#4A5567]">
                  4.3. Contributor Content
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Contributor Contents are offered in the terms stated at the relevant time in the Website (including, without limitation, daily download limits), and its use is allowed in the terms set out or referred to in these Terms, as applicable.<br></br>
                  When offering Contributor Content, the Company acts as a mere intermediary between the User that downloads such content and the Contributor, providing the User with the access and subscription to the Contributor Content.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Company makes reasonable efforts in guaranteeing the lawfulness of the Contributor Content. However, the Company cannot monitor or control all Contributor Content.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Therefore, the User acknowledges and agrees that the Company shall not be responsible for evaluating the originality, the non-infringement of third-party rights or the lawfulness of Contributor Content and that the Company does not guarantee nor is liable in respect of any such contents, except for those cases expressly provided in the applicable regulations.
               </p>

               <h2 className="font-bold text-base text-[#4A5567]">
                  5. Storage and Offer of Contributor Content
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The Company limits itself to solely hosting the Contributor Content and, therefore, it has no obligation to edit, select, check, or control the Contributor Content nor does it guarantee, approve or necessarily agree with the Contributor Content. If you wish to make an enquiry related to the Contributor Content or if you believe that the Contributor Content violates any rights or does not meet these Terms, or is inappropriate, you can contact the Company as indicated below.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Contributor is responsible for the Contributor Content provided to the Company for storage, publishing and offering to Users through the Website.
               </p>

               <h2 className="font-bold text-base text-[#4A5567]">
                  6. Liability
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The User acknowledges and agrees that he/she/it uses the Website and its Services at the User’s own risk and under the User’s responsibility and, therefore, the Company does not accept any responsibility for misuse or use in breach of these Terms.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User will be responsible for any damages to the Company resulting from the User’s use of the Website and the Services in breach of the Terms and accepts to indemnify the Company and its directors, employees, agents and representatives from any liability in which they may incur as a result of the User’s breach of these Terms.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Company does not warrant the availability or continuity of the Website or the Services, neither its reliability, quality, completeness, accuracy or whether they are fit for a specific purpose or activity.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  As way of example and without limitation, the Company shall not be liable for any damages that may result from:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Interruptions, viruses, technical problems, interferences, omissions, unavailability, power cuts, failure of the telecommunication networks or the User’s equipment which are not the Company’s responsibility.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Delays or unavailability of the Website and the Services due to deficiencies or traffic overload on the Internet, in the communication network or the electricity grid.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Third-party actions.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Unavailability of the Website and the Services due to maintenance or software updates.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Unavailability of the Website and the Services due to maintenance or software updates.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Any other event beyond the Company’s direct control.
                  </li>
               </UnorderedList>
               <p className="font-semibold uppercase my-4 text-base text-[#4A5567]">
                  SAVE FOR THE COMPANY’S WILFUL MISCONDUCT, AND THOSE CASES IN WHICH DUE TO THE SPECIFIC CIRCUMSTANCES OF THE USER INVOLVED OR THE NATURE OF THE MATTER, APPLICABLE LAW PROVIDES THAT LIABILITY CANNOT BE LIMITED BY AGREEMENT, USE OF THE WEBSITE AND THE SERVICES IS AT SOLE RISK O THE USER AND THE COMPANY SHALL NOT BE LIABLE FOR ANY DAMAGE OF ANY KIND CAUSED TO THE USER AS A RESULT OF USING THE WEBSITE AND/OR THE SERVICES.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  In accordance with Section 4 above regarding Third Party Content and Sponsored Content, the Company acts exclusively as a provider of a search service as requested by the User, without assuming any responsibility for search results.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The insertion of links in the Services does not imply any relationship, recommendation or supervision by the Company of the linked website and, accordingly, the Company does not accept any liability in relation to the content of any linked website except in the specific circumstances provided by the applicable law. In accordance with Section 4 above regarding the Contributor Contents, the Company acts exclusively as the provider of the intermediation service between the offer of ContributoContent and the Users interested in downloading them, without any liability in relation to such contents, except for those cases expressly stated by the applicable law. The Company will make reasonable commercial efforts in order to ensure the accuracy of keywords and descriptions, as well as the identification of content as exclusively for editorial use or any equivalent expression. 
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  However, THE COMPANY NEITHER WARRANTS NOR MAKES ANY REPRESENTATION REGARDING ANY KEYWORD, TITLE OR DESCRIPTION; OR THE IDENTIFICATION OR LACK OF IDENTIFICATION OF ANY VISUAL CONTENT AS EXCLUSIVELY FOR EDITORIAL USE. For this reason and notwithstanding any other liability limitation that may be applicable in accordance with these Terms, the Company shall neither indemnify nor assume any liability in connection with any claim resulting from inaccurate keywords, titles or descriptions, or from the use of the visual content identified as exclusively for editorial use.
               </p>

               <h2 className="font-bold text-base text-[#4A5567]">
                  7. Intellectual Property
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  All intellectual property rights over the Website, the Services, and/or the Papayas Studio Content, its design, and source code, and all content included in any of them (including without limitation text, images, animations, databases, graphics, logos, trademarks, icons, buttons, pictures, videos, sound recordings, etc.) belong or are licensed to the Company. Except as expressly authorized under these Terms, the reproduction or distribution, as well as transformation, producing any derivative works of any kind, public communication, making available, extraction, reuse or any other use of the Website, the Services, the Papayas Studio Content or any of its parts, is strictly forbidden.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Third Party Content and the Sponsored Content are protected by intellectual property rights, as appropriate, and belong to their owners. Although the Services can locate and provide access to these contents, its download and use is subject to the conditions set by the relevant third party. The Company is not the owner and cannot grant any license or authorization in relation to Third Party Content or Sponsored Content. The User must obtain authorizations that are, in each case, required to use any Third Party Content or any Sponsored Content.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  If the third-party holder of a Third Party Content or Sponsored Content does not want to be included in the Company’s search results, the third party can contact the Company as indicated in these Terms. Regarding a specific Third Party Content or Sponsored Content appearing as a search result, you can use the copyright complaint that appears next to the result. If you believe that any content infringes third party rights or does not comply with these Terms, you can report it to the Company as set forth in these Terms. In addition, you can use the copyright infringement report system that is provided with any result in the Website.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  8. License Agreement for Papayas Studio Content
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The Company authorizes the User to download and use the Papayas Studio Content under the terms of this Section (see Section 7 in relation to Third Party Content and Sponsored Content). The Company and its licensors reserve all rights over the Papayas Studio Content not expressly granted in this license to the User.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Company authorizes the User in a non-transferable, limited, non exclusive manner and on a worldwide basis for the duration of the relevant rights; to download, use and modify the Papayas Studio Content, in a device the User owns or controls and only for the purposes and uses allowed in these Terms.
               </p>
               <p className="font-medium mt-4 text-base text-[#4A5567]">
                  The User may use the content in the Papayas Studio Content provided that it:
               </p>
               <NumberedList>
                  <li  className="font-medium my-1 text-base text-[#4A5567]">
                     Does not involve collective use;
                  </li>
                  <li  className="font-medium my-1 text-base text-[#4A5567]">
                     The content in the Papayas Studio Content is not used in a manner that suggests an association or endorsement by the Company or the Website;
                  </li>
                  <li  className="font-medium my-1 text-base text-[#4A5567]">
                     The content in the Papayas Studio Content or any derivative work is not used or included (in whole or in part) in a database, archive or in any other media/stock product, collection, set of clips, or library, for distribution or resale or used in any other way that could prevent or limit future visits ordownloads from the Website;
                  </li>
                  <li  className="font-medium my-1 text-base text-[#4A5567]">
                     Does not resell, assign, transfer or sublicense the content in the Papayas Studio Content or any derived work from a content in the Papayas Studio Content;
                  </li>
                  <li  className="font-medium my-1 text-base text-[#4A5567]">
                     Does not use the content in the Papayas Studio Content in printed or electronic items (e.g. t-shirts, cups, postcards, birthday or greeting cards, invitations, calendars, web models or electronic devices, apps, videogames, advertising spots, audiovisual animations) aimed to be resold, in which the content in the Papayas Studio Content is the main element (because of size, relevance or any other cause, in case of doubt about whether the content is main element, it shall be deemed that the content is main element);
                  </li>
                  <li  className="font-medium my-1 text-base text-[#4A5567]">
                     Does not use the content in the Papayas Studio Content (totally or partially) in any trademark, logo or part of the same, which may be used by any other means to guarantee or to imply a guaranty of any product and or service, unless the content in the Papayas Studio Content used in such cases is modified in such a way as to be a new and different content not confusingly similar with the original content in the Papayas Studio Content or implies a use of the content in the Papayas Studio Content as atemplate or test, and not as a final item or material;
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Does not make any use of the content in the Papayas Studio Content which might be considered defamatory, libellous, obscene, immoral or illegal, including, without limitation, using it in a way that places any person appearing in the content in the Papayas Studio Content in a negative light or depicts them in a way that they may find offensive such as the use in pornography, advertisements for escort or similar services, political endorsements, birth control products, and;
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Does not make any use of the content in the Papayas Studio Content to slander, libel or to vilify a person, race, sex, culture, religion, country, region, town, village or any other place.
                  </li>
               </NumberedList>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  When any content of the Papayas Studio Content is marked or identified as for editorial use, or when within the same there are logos, recognizable products, public buildings, public events or images taken in places where recognizable persons appear on the background, the User shall only be entitled to use it for such editorial use. In such cases, the User undertakes not to use that content in any manner that entails advertising, marketing or commercialization of any product or service. The User shall be directly liable and the Company shall not assume any liability as a result of the use for commercial purposes by the User of any content belonging to the Papayas Studio Content, which according to this paragraph should be for editorial use only.
               </p>
               <p className="font-medium mt-4 text-base text-[#4A5567]">
                  The authorization to use the content in the Papayas Studio Content shall be free provided that any use of the content in the Papayas Studio Content by the User is credited to the Company/Website as stated by the Company from time to time. In order to benefit from the Service or to use the content in the Papayas Studio Content without acknowledging the Company Website, the User must purchase a subscription (hereinafter, the “Subscription”) in the Website and download the content in the Papayas Studio Content during the term of any such Subscription. Conditions in Section 9 shall apply to the purchase of the Subscription. It is forbidden for a User to authorize any third parties to use the Papayas Studio Content (or any modification of any content in the Papayas Studio Content). As an exception to the prohibition, the User may allow third parties to use the content in the Papayas Studio Content, when each and every of the following conditions are met:
               </p>
               <NumberedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The third party has professionally instructed the User to produce goods or provide services to it/him/her and the User uses a limited number of items within the content in the Papayas Studio Content to produce such goods or provide such services to the instructing third party;
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The authorization granted by the User to the third party is in writing and complies with every restriction of the User’s authorization to use the relevant content in the Papayas Studio Content and includes, without limitation, a restriction for the third party to distribute, resell or license the relevant content in the Papayas Studio Content (i.e. the third party is the final user of the relevant content in the Papayas Studio Content);
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     None of the contents in the Papayas Studio Content which are subject to the authorization are used as the main element (because of size, relevanceor any other cause; in case of doubt about whether the content is the main element, it shall be deemed as the main element) in printed or electronic items (e.g. t-shirts, cups, postcards, birthday or greeting cards, invitations, calendars, web models or electronic devices, apps, videogames, advertising spots, audiovisual animations) aimed to be resold by the third party;
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The production of goods or provision of services by the User to the third party is not done by automatic means, it is tailor-made for the third party (and therefore its use is not authorized by the User to any other third party) and requires a specific substantial human intervention from the User in relation to each third party; and
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The User -and not the third party- chooses the specific items within the content of the Papayas Studio Content to be used in the production of goods or provision of services for the third party.
                  </li>
               </NumberedList>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  When all of the above conditions are met, the User shall be entitled to authorize a third party to use the relevant content in the Papayas Studio Content. This exception refers only to the prohibition for the User to authorize third parties to use the content in the Papayas Studio Content without affecting or limiting in any way the remaining conditions of the User’s right to use the Papayas Studio Content. Whether the above conditions regarding the exception to the prohibition for Users to authorize third parties to use the content in the Papayas Studio Content are met shall be interpreted restrictively so that, in case of doubt, it shall be deemed that the conditions are not met.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User does not acquire any right as a result of the use of the content in the Papayas Studio Content. In particular, the User is not authorized to distribute, resell or rent any content in the Papayas Studio Content (or any modification of any content in the Papayas Studio Content).
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User’s rights under this Section will end automatically without any notice if the User breaches any of the Terms. In case of termination of the rights hereunder, the User shall cease using content in the Papayas Studio Content and will destroy every copy, whether total or partial, thereof.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  9. Conditions for the Subscription
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The terms in this Section (“Subscription Terms”) govern any purchase of any Subscription in the Website. When concluding the purchase procedure for any Subscription, it shall be deemed that the User has read and accepted, without exception, the Subscription Terms. For the avoidance of doubt, the Subscription Terms are additional to the Terms which will continue to apply to Users who have acquired a Subscription unless it is expressly provided otherwise in relation to specific provisions in the Subscription Terms.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  These Subscription Terms are available to the User before the purchase of the Subscription and may be stored or reproduced on a durable medium. The Subscription Terms are available in English and Spanish. In case the User is interested in purchasing any Subscription, it has to follow the instructions available in the Website from time to time.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Subscriptions available are offered in the Website where the pertinent information, price and conditions are included (including, without limitation, restrictions to the number of downloads each day). The Company can modify the Subscriptions offered at any time, offering with new Services (to which, unless otherwise stated, these Subscription Terms shall apply) or ceasing to offer any of the Services. The Subscriptions are personal, shall not be assigned to third parties and no third parties other than the User shall be allowed to use the Papayas Studio Content (including as third parties, for these purposes, affiliates or entities part of the same group of companies).
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The price for the Subscription is stated in US Dollars in the Website and includes, if applicable, the relevant Value Added Tax. The Company is entitled to modify the price for any Subscription at any time. The Company shall apply the price stated in the Website at the time of the submission of the Subscription order by the User.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User shall pay the Subscription in advance through Paypal or credit debit card, as stated in the Website. To purchase and pay the Subscription, the User shall follow the instructions stated in the Website. The processing of the payment information and data through Paypal or credit/debit card is made within third-party sites. When ordering any Subscription, the User authorizes the Company to collect the corresponding price through the chosen payment method. The Subscription shall not be activated until the Company has received the payment or the payment has been authorized by the relevant financing entity.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  After that, the Subscription shall be in force for the term purchased by the User. Unless otherwise stated in these Subscription Terms, the Subscriptions shall be automatically and successively renewed at the expiration of its term, unless the User cancels the renewal of the Subscription before its expiration. The Company shall charge the corresponding price by the same initial payment method. The Company may modify the price for the renewal of the Subscription, provided that the User is informed with, at least, one-month prior notice.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Once the User purchases the Subscription, the screen shall confirm the purchase. In addition, within the shortest time reasonably possible and not after twenty-four (24) hours since the acceptance of the order, an email shall be sent to the User with the receipt of the purchase. The receipt may be stored and printed. The User may request and download an invoice as stated within the Website twenty-four (24) hours after making the relevant payment.
               </p>
               <p className="font-medium mt-4 text-base text-[#4A5567]">
                  After the purchase of the Subscription, the User may benefit from the following:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]"> 
                     The Service consisting in using the content in the Papayas Studio Content without crediting the Company/Website. The rest of conditions stated or referred to inSections 7 and 8 shall still be applicable.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]"> 
                     Access all contents available in the Website.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]"> 
                     Use the Website without advertisement displaying.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Not to be subject to the restrictions as to number of content downloads applicable to the Papayas Studio Content from time to time, without prejudice to the application of certain restrictions to the number of downloads aimed at preventing a fraudulent or abusive use of the Website.
                  </li>
               </UnorderedList>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  As the content in the Website is digital content, no cancellation right shall apply, without prejudice to the guarantees stated in the consumers’ regulations that may be applicable.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  10. Changes and Closure of the Website
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The Company may, at any moment, and without incurring in any responsibility towards the User, modify the content of the Website or the Services, limit or modify the conditions or cease to provide some or all the Services and features available or deactivate and delete all or some of the User accounts and their corresponding information. However, the Company will comply with its obligations regarding the keeping of records in relation to certain transactions for the relevant period as provided by applicable law or refund the Users of Subscriptions in force at that time with the proportional part of the price not accrued before the termination.
               </p>

               <h2 className="font-bold text-base text-[#4A5567]">
                  11. General and Contact Information
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The use of the Website and the Services and the interpretation and application of these Terms shall be governed by the laws of Delaware.
               </p>

               <h2 className="font-bold text-base text-[#4A5567]">
                  12. Arbitration:
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  All disputes arising out of or in connection with this Term of Use shall be finally settled under the Rules of Arbitration of the International Chamber of Commerce (the “Rules”) by a single arbitrator appointed in accordance with said Rules. The Parties expressly agree, pursuant to Article 30(2)(b) of the Rules, that the Expedited Procedure Rules shall apply irrespective of the amount in dispute. The place of arbitration shall be in Dubai, United Arab Emirates. The language of the arbitration shall be English.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  If any provision in these Terms is declared to be invalid or unenforceable, it shall be substituted or deemed as not included. The remaining provisions in these Terms shall not be affected in any way.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  <strong>Papayas Studio Terms and conditions</strong> <br></br>
                  The Papayas Studio website is run by a Delaware corporation called Web3D Media Incorporated, which has its registered office at 651 N Broad St in New Castle, Delaware.(“Company”).
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The use of Papayas Studio, including any of its subdomains and/or sections (the {`"Website"`}) and the services provided via the Website (the {`"Service" `}or {`"Services"`} as applicable) is governed by these terms of use (the {`"Terms"`}), which include the download and use of certain content. By using the Website, you acknowledge and agree that you have read and understand these Terms and Conditions and agree to be bound by them. Any use of the Website by a User who does not agree to these terms or who objects to any part of them is prohibited. We urge that the User review the Terms on a frequent basis to ensure that they are up to date. According to these Terms, the date on which these Terms were published is the date on which these Terms were most recently updated.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User may be required to accept certain restrictions or instructions prior to the supply of some Services via the Website. It is possible that the company or a third party will apply these conditions. In the event of a discrepancy between the Terms and these additional conditions, the Terms shall take precedence. In this case, the User must read and agree these terms before using the Service.
               </p>

               <p className="font-medium my-4 text-base text-[#4A5567]">
                  In the same way, the Privacy Policy governs how personal data is collected and used.
               </p>

               <h2 className="font-bold text-base text-[#4A5567]">
                  1. Provided Services
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  {`It's`} possible to search for visual content, such as 3D vectors and illustrations (such as pictures, images, PSDs, and Photoshop files), as well as particular information relating to such content, on the Website.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  There may be content owned by the company ({`"Papayas Studio Own Content"`}) offered through the website ({`"Contributor Content"`}) as well as content held by other parties and not offered for free by the website (called {`"Sponsored Content"`} by the services). On the search results, sponsored content is clearly marked as such. The Papayas Studio Content, which includes both Papayas {`Studio's`} own and third-party contributions, is available for freedownload on the website.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Third-party content (also known as {`"Third Party Content"`}) may also be given by the Service in response to a search completed by the User. Contributor Content is content that users upload to the website for the purpose of storing, publishing, and making it available to other users. It is the responsibility of the user to adhere to the conditions and procedures set forth by the Company from time to time while contributing content to the Website
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  2. Permission to Use
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  In order to use the Website and Services, the User must do so in a manner consistent with the Terms and in good faith. Furthermore, regardless of whether or not they have purchased a Subscription, all Users agree that any access or downloads of content from the Website or through the Services will always be the result of the {`User's`} genuine legitimate interest and acknowledge that any method which artificially increases the number of downloads, accesses or clicks on such content is strictly prohibited under these Terms.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  User agrees not to misuse the Services in an unlawful or careless way. For their part, users must refrain from any actions that could harm the reputation of the website or third-party content creators in any way, including but not limited to any conduct or actions that could harm their own reputation as well as those of other users of the website.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  In addition, the User will not use the Website or the Services to impersonate another user or person. The User agrees not to take any action that could harm, make unavailable or interfere with the normal use of the Website or Services in any way. In order to protect the integrity of the website and the services provided by the company without violating their interests, it is forbidden to use robots, spiders, mobile applications, programs, or any other tool without their express prior authorization. In addition, any method of accessing the website that is not officially sanctioned by the company, or that goes against the grain of what most people are used to, is prohibited.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Users are responsible for any and all charges associated with using the Services and for verifying that the {`Services'`} features fit their requirements and that they have the necessary equipment and software prior to utilizing the Services. There are no transferable or assignable rights granted to any third party (including affiliates or entities in the same group of companies) by the User under these Terms, and the Company must give its express and written consent before any rights granted to the User can be transferred or assigned to a third party. Ads connected to or unrelated to the searched content or services may appear on the Website, and this is explicitly agreed to by the user while using the Services.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  3. Enrollment.
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Using some Services necessitates the creation of a username and password and the activation of an account by the User. A valid email address must be provided by the User in order for the User to be notified of the Services. Those registering on behalf of a legal body or business declare that they are properly authorized to bind that organization and that organization agrees to be bound by these Terms, and their username must be their full name or corporate name. User agrees to supply and recognizes that the information provided is genuine, full, and up-to-date during registration. Keeping this information up-to-date is exclusively the responsibility of the user. A {`user's`} account can be suspended if the user provides inaccurate, outdated, or incomplete information to the company. The company has the authority to do so. The account password must be protected and kept secure by the user at all times and should not be disclosed to anyone else. Neither the {`User's`} account nor another {`User's`} account can be used to access the Services by another User.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Any action taken through the {`User's`} account on any device is the responsibility of the User. An urgent notification should be made to the Company by the User who fears another User is using his/her account. If the Company believes that the User has violated these Terms, it has the right to suspend or terminate the {`User's`} account.
               </p>

               <h2 className="font-bold text-base text-[#4A5567]">
                  4. Content
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Users have the option to:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Download Papayas Studio Content by searching for and downloading such Papayas Studio Content.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     See if the User can find any content that includes Third Party Content or Sponsored Content.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Upload Contributor Content in accordance with the conditions and procedures specified from time to time by the Company for storage, publication, and offer on the Website or through the Services
                  </li>
               </UnorderedList>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  There is a copyright complaint form on the Website if you have any questions or concerns about the material or if you believe that it infringes any rights, does not conform with these Terms, or is otherwise objectionable.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  4.1 Sponsored and Third-Party Content
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Third Party Content and Sponsored Content are only provided to the User as a search result with a link to the relevant website, and the {`Website's`} role is restricted to presenting this content as a consequence of the search. To enhance the user experience and make it easier for the User to return to the Services, in some situations the link can be shown in a frame that matches the Website, which can be withdrawn at any moment by the User. Neither the Company nor the Third Party Content or Sponsored Content are owned or provided by the Company. Search results and links to third-party content do not imply any kind of business arrangement between our company and that third-party content provider.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Third Party Content and Sponsored Content originating from user searches are not vetted, examined, controlled, guaranteed, approved, sponsored, or associated in any way with the company in any of these ways. There is no one else responsible for the Third Party Content or the Sponsored Content other than the third parties who put it online.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The terms and conditions set forth by the third parties govern the {`User's`} access to and download of Third Party Content and/or Sponsored Content from their respective websites. We will not be party to or involved in any way in the {`User's`} relationship with the third party. By downloading and using Third Party Content and/or Sponsored Content, the User agrees to abide by the terms and conditions set out by such third parties. If a third party delivers Third Party Content or Sponsored Content, the Company does not participate in that third {`party's`} connection with the User and is not directly or indirectly liable for the {`User's`} or the third {`party's`} performance, omissions, errors and negligence. You must contact the third parties directly if you have a complaint about their Third Party Content or their Sponsored Content.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  4.2 Content Owned by Papayas Studio
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  There may be limitations on the number of downloads per day for Papayas Studio Own Contents, and their usage is permitted only in accordance with the terms and conditions set out or referred to in these Terms, as applicable.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  4.3 Contributor Content
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The User is permitted to utilize Contributor Contents as set out or referred to in these Terms, as applicable, in accordance with the terms set forth or referred to in these Terms, as applicable.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Because of this, when the Company offers Contributor Content, it simply acts as a go-between, connecting the Contributor with users who acquire their work. Lawful Contributor Content is guaranteed by the Company to the best of its ability. The Company, on the other hand, is unable to keep track of every piece of Contributor Content. User agrees that Company is not responsible for determining if Contributor Content is original, does not infringe on other rights, or is lawful. The Company does not guarantee nor is liable for any such content, except in those situations expressly provided by the applicable rules.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  5. Keeping and Making Available Contributor Content
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Contributor Content is not within the {`Company's`} control and is not subject to the {`company's`} review or approval. The company just hosts Contributor Content and is not responsible for it in any way. If you have a question about the Contributor Content, or if you believe that the Contributor Content infringes any rights or does not meet these Terms, or is improper, you can contact the Company at the following address. In order to save, publish, and make available to users via the Website, the Company relies on Contributor Content submitted by the Contributor.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  6. Liability
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  For the avoidance of doubt, the Company does not assume any responsibility for misuse or use that is in violation of these Terms, and the User agrees to assume all liability for the use of the Website and its Services. Any damages caused by the {`User's`} breach of these Terms shall be the responsibility of the User and the User agrees to indemnify the Company and its directors, employees, agents and representatives from any liability they may incur as a result of the {`User's`} breach. In no event does the Company guarantee that the Website or the Services will be available or uninterrupted, nor does it guarantee that they will be of adequate quality, completeness, correctness or suitability for a certain purpose or activity.
               </p>
               <p className="font-medium mt-4 text-base text-[#4A5567]">
                  For example, but not limited to, the Company shall not be liable for any losses resulting from:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Unavailability, power outages, failure of telecommunication networks or of the {`User's`} equipment that is not the {`Company's`} fault, interruptions, viruses, technical problems, interferences, omissions,
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     A failure of the Internet, telecommunications network, or electrical grid that causes delays or unavailability of the website and its services.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Actions of a third party.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Due to maintenance or software changes, the Website and the Services are unavailable.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Anything else that is out of the {`company's`} hands completely.
                  </li>
               </UnorderedList>
               <p className="font-medium my-4 text-base text-[#4A5567] uppercase">
                  SAVE FOR THE {`COMPANY'S`} MISCONDUCT, AND THOSE CASE WHERE APPLICABLE LAW PROHIBITS LIABILITY FROM BEING LIMITED BY AN AGREEMENT, THE USE OF THE WEBSITE AND/OR SERVICES IS AT THE RISK OF THE USER AND THE COMPANY SHALL NOT BE LIABLE FOR ANY DAMAGE OF ANY KIND CAUSED TO THE USER AS A RESULT OF USE OF THE WEBSITE.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Section 4 of the Terms and Conditions explains that the Company is solely a search service provider for the benefit of the User, and does not assume any responsibility for the search results. Unless otherwise required by law, the Company accepts no responsibility for the content of any connected website for which links are included in the Services and makes no representations regarding the relationship, suggestion, or oversight between it and the Company. According to Section 4 above regarding Contributor Contents, the Company acts only as the intermediary service provider between the offer of Contributor Content and the Users interested in downloading them, without any liability with respect to such content, except as expressly stated by applicable law. All content must be clearly marked as strictly for editorial use or some other expression to which we may ascribe commercially reasonable efforts by the company. There are no guarantees or representations made by THE COMPANY, however, with regards to any keywords, titles, or descriptions; or the identification or lack of identification of any visual content only for editorial purposes. Since the Company will not be liable for any claims resulting in inaccurate keywords, titles, or descriptions, or from using the visual content labelled as editorially-only, it is important to note that the Company will not be responsible for any claims resulting in any damages.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  7. Patents and Trademarks
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  To the fullest extent permitted by applicable law, the Company owns and/or licenses all intellectual property rights related to the Website, the Services, and/or Papayas Studio Content, as well as all content included in any of them (such as but not limited to text; images; animations; databases; graphics; logos; trademarks; icons; buttons; pictures; videos; sound recordings). All other uses of the Papayas Studio Content and the Papayas Studio Website, including but not limited to the reproduction, distribution and transformation of the Papayas Studio Content, are prohibited unless expressly permitted by these Terms.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The intellectual property rights of the Third Party Content and Sponsored Content are owned by their respective owners. Even if the Services can locate and offer access, the third {`party's`} terms and conditions govern the {`content's`} download and usage. Third Party Content and Sponsored Content are not owned by the Company, and the Company cannot offer any license or authorization to use them. To utilize any Third Party Content or Sponsored Content, the User must get the necessary authorizations.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  A Third Party Content or Sponsored Content holder can contact the Company as described in these Terms if they do not wish to appear in the {`Company's`} search results. You can use the copyright complaint that displays next to a specific Third Party Content or Sponsored Content search result to file a complaint. It is up to you to notify the Company if you believe that any content infringes on any third-party rights or violates these Terms. Additionally, you can file a report of alleged copyright infringement using the {`Website's`} built-in system.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  8. Papayas Studio Content Licensing Agreement
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  The Papayas Studio Content may be downloaded and used by the User only in accordance with the provisions of this Section, which the Company has agreed to (see Section 7 in relation to Third Party Content and Sponsored Content). The Company and its licensors retain all rights not expressly granted in this license to the User with respect to Papayas Studio Content. Users are granted a non-transferable license to download, use, and change Papayas Studio Content in accordance with these Terms on a device they own or control and for the purposes and uses permitted in these Terms.
               </p>
               <p className="font-medium mt-4 text-base text-[#4A5567]">
                  In order for the Papayas Studio Content to be used by the User, the following conditions must be met:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The use {`doesn't`} involve the use by a group;
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     It is not implied that the Company or the Website is associated with or endorses the content in any way.
                  </li>

                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     It is not implied that the Company or the Website is associated with or endorses the content in any way.
                  </li>

                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The Papayas Studio Content or any derivative work is not used or included (in whole or in part) in a database, archive, or in any other media/stock product, collection, set of clips, or library, for distribution or resale or used in any other way that could prevent or limit future visits or downloads from the Website; nor is the Papayas Studio Content used in any way that could prevent or limit future visits or downloads.
                  </li>

                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Papayas Studio Content or any derivative work developed from Papayas Studio Content content may not be resold, assigned, transferred, or sublicensed in any way.
                  </li>

                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The user must not use the content in the Papayas Studio Content in any printed or electronic items (like T-shirts, cups or postcards) intended for resale in which the content in the Papayas Studio Content is the main element (because of size, relevance or any other cause, in case of doubt about whether the content is the main element, it shall be deemed to be t) in which the content in the Papayas Studio Content is the main element (because of size, relevance or any other cause).
                  </li>

                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     If the content of the Papayas Studio Content is used in any trademark, logo, or part of the same to guarantee or suggest a guarantee of a product or service, it must be modified in some way so that it is a new and distinct version that is not confusingly similar to the original content of Papayas Studio Content or implies a use of the content.
                  </li>

                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     In particular, the user must not use any of the Papayas Studio Content in a way that disparages or depicts any person who appears in the Papayas Studio Content in a negative light or depicts them in a way that they may find offensive, such as the use in pornography, advertisements for escort or similar services and political endorsements, as well as birth control products;
                  </li>

                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The user must not utilize any of the Papayas Studio Content for any purpose that might be construed as an attack on a specific individual or group of individuals (such as slander or libel).
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Papayas Studio Content that includes logos, recognizable products, public buildings, public events, or photos taken in settings where identifiable people appear on the background can only be used for editorial purposes if the Papayas Studio Content is labelled or identified as such. Any use of such content by the User is subject to their agreement not to use it for the purpose of advertising, marketing, or commercialization of any kind. If any Papayas Studio Content content is used for commercial gain by the User, the User will be solely responsible for any resulting damages, and the Company will bear no responsibility for the {`User's`} actions.
                  </li>
               </UnorderedList>

               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The Papayas Studio Content may be used by the User for free, provided that the Company/Website is credited for any usage of the Papayas Studio Content by the User as stated by the Company from time to time. User must purchase a subscription (hereinafter referred to as {`"Subscription"`}) on the Website and download the content in the Papayas Studio Content during the term of any such Subscription in order to benefit from the Service or use the content in the Papayas Studio Content without acknowledging the Company/Website. The purchase of a Subscription is subject to the terms and conditions set out in Section 9.
               </p>
               <p className="font-medium mt-4 text-base text-[#4A5567]">
                  The Papayas Studio Content may not be used by anybody other than the User (or any modification of any content in the Papayas Studio Content). When all of the following conditions are met, the User may allow third parties to use the content in Papayas Studio Content:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Using a restricted amount of things from the Papayas Studio Content, the User is able to make commodities or offer services for the instructing third party, which the third party has hired the User to do;
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Using a restricted amount of things from the Papayas Studio Content, the User is able to make commodities or offer services for the instructing third party, which the third party has hired the User to do;
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The {`User's`} authorization granted to the third party is in writing and complies with every restriction of the {`User's`} authorization to use relevant content in Papayas Studio Content and, without limitation, a restriction for the third party to distribute, resell, or license (i.e. the third party is final user of Papayas Studio Content).
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     None of the Papayas Studio {`Content's`} authorized content may be used as the primary element in printed or electronic items (such as t-shirts, cups, postcards, birthday or greeting cards, invitations, calendars, web models or electronic devices, apps, videogames, advertising spots), regardless of their size, relevance, or any other factor; if there is any doubt about whether the content is the primary element, it shall be deemed to be the primary element.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Each third {`party's`} goods or services are custom-tailored by the User and therefore not permitted for use by the User by any other third party; and each third party requires substantial human intervention from the User in connection to each third party.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Users, not third parties, pick which Papayas Studio Content items are used in the production of goods or the provision of services for third parties.
                  </li>
               </UnorderedList>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  {`It's`} possible for a user to grant a third party access to Papayas Studio Content if all the above conditions are met. However, this exception does not affect or limit in any manner the {`User's`} right to use the Papayas Studio Content in any other way than by prohibiting them from authorizing third parties to use such content. As a result, the foregoing circumstances regarding the exception to the ban on Users granting third parties permission to use the material in the Papayas Studio Content are to be understood in a restricted manner so that, in the event of question, the conditions are not met.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  As a result of using Papayas Studio Content, the User does not gain any rights. The Papayas Studio Content may not be distributed, resold, or rented by the User (or any modification of any content in the Papayas Studio Content).
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  This {`section's`} rights will be immediately terminated if the User violates any of the Terms. Papayas Studio Content may be terminated at any time for any reason, and the User agrees to stop using and destroy all copies of the Papayas Studio Content.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  <strong>The Subscription Requirements</strong>
                  Subscriptions purchased through the website are subject to the terms outlined in this section ({`"Subscription Terms"`}). In order to purchase any Subscription, the User must have read and accepted the Subscription Terms in their entirety. Because of this, the Subscription Terms are in addition to the Terms, which will remain in effect unless explicitly stated otherwise in the Subscription Terms with regard to specific provisions in the Subscription Terms.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Users have access to these Subscription Terms prior to making a purchase and may store or replicate them on a long-lasting medium. English and other language versions of the Subscription Terms are provided for your convenience. To purchase a subscription, the User must follow the instructions that appear on the Website at various points in time.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Here you will find all relevant details and pricing information for the subscriptions that are currently available on our website (including, without limitation, restrictions to the number of downloads each day). When it comes to offering new services (to which these Subscription Terms apply unless otherwise stated), the Company has the right to alter the subscriptions it offers at any time. Papayas Studio Content may not be used by anyone other than the subscribed User, and subscriptions may not be transferred or assigned to anyone else (including as third parties, for these purposes, affiliates or entities part of the same group of companies). If applicable, Value Added Tax (VAT) is included in the Subscription price on the Website.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  There is no temporal limit on how often the Company can alter the price of any Subscription. The Company will apply the pricing listed on the Website at the time of the {`User's`} Subscription order submission to the subscription fee. As indicated on the Website, the User must pay the subscription fee in advance using any authorised payment service or a credit/debit card. The User must follow the instructions on the Website to purchase and pay for the subscription. Third-party sites handle the processing of payment information and data via the authorised payment service or credit/debit card. 
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The User agrees to allow the Company to collect the subscription fee via the payment method of their choice when they purchase a subscription. Payment must be received by the Company or permitted by the applicable funding entity before the Subscription can be activated. After that, the Subscription shall be in force for the term purchased by the User. If the user does not cancel the renewal of the subscription prior to its expiration, the subscriptions will be automatically and sequentially renewed unless otherwise indicated in these Subscription Terms. Terms of Service. The initial payment method will be used to charge the same price.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  Subscription renewal prices may be changed by the Company if the User is given at least one {`month's`} notice. The screen will display a confirmation message once the subscription has been purchased by the user. An email will be provided to the User with a receipt of purchase within the shortest time possible and no later than 24 hours after the order was accepted. It is possible to save and print a receipt. Within twenty-four (24) hours of completing the applicable payment, the User may request and receive an invoice as mentioned on the Website.
               </p>
               <p className="font-medium mt-4 text-base text-[#4A5567]">
                  The following are some of the possible perks for the User after purchasing the Subscription:
               </p>
               <UnorderedList>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The practice of using Papayas Studio Content content without giving acknowledgment to the company or website that created it. The rest of conditions specified or referred to in Sections 7 and 8 shall still be applicable.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Access all of the {` Website's`} material.
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     The {`User's`} authorization granted to the third party is in writing and complies with every restriction of the {`User's`} authorization to use relevant content in Papayas Studio Content and, without limitation, a restriction for the third party to distribute, resell, or license (i.e. the third party is final user of Papayas Studio Content).
                  </li>
                  <li className="font-medium my-1 text-base text-[#4A5567]">
                     Adverts will not be displayed on the Website.
                  </li>
               </UnorderedList>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  In order to prevent fraudulent or abusive use of the Website, the Papayas Studio Content may have restrictions on the amount of content downloads from time to time, but these restrictions will not apply to the Papayas Studio Content.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  No cancellation rights will apply because the content on the Website is digital content, notwithstanding any guarantees that may be contained in the consumer rules that may apply.
               </p>
               <h2 className="font-bold text-base text-[#4A5567]">
                  10. Website Reorganization and Closure.
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Users are not obligated to use the Website or the Services if changes are made, but the Company may do so at any time and without incurring any liability for the User. There are exceptions to these rules, however, such as when a company is required to preserve a record of particular transactions for a specific time period or when a user is entitled to a refund for a subscription that has already been terminated.
               </p>

               <h2 className="font-bold text-base text-[#4A5567]">
                  11. Applicable Laws and Dispute Resolution:
               </h2>
               <p className="font-medium mb-4 text-base text-[#4A5567]">
                  Delaware law governs the interpretation and application of these Terms and the use of the Website and Services.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  All disputes arising out of or in connection with this Term of Use shall be finally settled under the Rules of Arbitration of the International Chamber of Commerce (the “Rules”) by a single arbitrator appointed in accordance with said Rules. The Parties expressly agree, pursuant to Article 30(2)(b) of the Rules, that the Expedited Procedure Rules shall apply irrespective of the amount in dispute. The place of arbitration shall be in Dubai, United Arab Emirates.
               </p>
               <p className="font-medium my-4 text-base text-[#4A5567]">
                  The language of the arbitration shall be English. Unless otherwise stated, the invalid or unenforceable provisions of these Terms shall be substituted or presumed to be omitted. The rest of these Terms will remain in full force and effect.
               </p>
            </TextWrapper>
         </div>
      </div>
   )
}

export default TermsContainer