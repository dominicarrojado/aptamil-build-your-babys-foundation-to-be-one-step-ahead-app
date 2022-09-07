import cn from 'classnames';
import Modal from '../modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalTnc({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} title="Terms &amp; Conditions" onClose={onClose}>
      <ol className="space-y-6">
        <li>
          1) By participating in this Contest, Participants agree to be bound by
          these terms &amp; conditions.
        </li>
        <li>
          2) This Contest is open to all except employees and immediate families
          of Danone, Singapore Branch, its distributor and advertising agencies.
        </li>
        <li>3) This Contest is open to anyone residing in Singapore.</li>
        <li>
          4) Contest period starts on 1st October 2017 and ends on 12th November
          2017.
        </li>
        <li>
          5) This Contest consists of 1 x 1st prize, 1 x 2nd prize and 1 x 3rd
          prize. All winners will be decided by lucky draw.
        </li>
        <li>
          6) Entries with incomplete or inaccurate details provided will be
          disqualified from the draw.
        </li>
        <li>
          7) One winner for the $5000 travel voucher (1st Prize) will be drawn
          at the end of the contest period
          <ul className={cn('list-disc pl-[30px]')}>
            <li>
              Redeemable for travel packages, air tickets and hotel
              accommodations available at retail stores of Chan Brothers Travel
              Pte Ltd
            </li>
            <li>Valid for 1 years from date of issue, strictly no extension</li>
            <li>
              Winner to refer to travel agency&apos;s voucher for its terms and
              conditions
            </li>
          </ul>
        </li>
        <li>
          8) One winner for the 6 months of Aptamil products worth $1900 (2nd
          Prize) will be drawn at the end of the contest period
          <ul className={cn('list-disc pl-[30px]')}>
            <li>Excludes Aptamil Gold+ Stage 1 products</li>
            <li>Not exchangeable for cash or other items</li>
          </ul>
        </li>
        <li>
          9) One winner for the 3 months of Aptamil products worth $1000 (3rd
          Prize) will be drawn at the end of the contest period
          <ul className={cn('list-disc pl-[30px]')}>
            <li>Excludes Aptamil Gold+ Stage 1 products</li>
            <li>Not exchangeable for cash or other items</li>
          </ul>
        </li>
        <li>
          10) Each unique identification (NRIC) per household is entitled to one
          prize only (applicable to both $5000 travel voucher to New Zealand and
          Aptamil products). Each unique email address and mobile number is
          entitled to one contest entry only.
        </li>
        <li>
          11) Winners will be announced within 1 month from the Contest closing
          date on AptaAdvantage Facebook page.
        </li>
        <li>12) Winners will be notified by email and/or phone call.</li>
        <li>
          13) Collection of all prizes will be at Danone Singapore, 1 Wallich
          Road, Guoco Tower, #18-01, Singapore 078881.
        </li>
        <li>
          14) All prizes are not transferable or exchangeable for cash or other
          items.
        </li>
        <li>
          15) AptaAdvantage may at any time vary, modify, add or delete any of
          these terms and conditions governing the Contest or the prizes,
          including terminating or withdrawing the Contest and/or substituting
          the prizes with any item of equivalent or similar value, without prior
          notice or reason. Participants will be notified of any changes in
          dates applicable to the Contest via the Site. For the avoidance of
          doubt, the Participant will not be entitled to any damages or
          compensation that may arise as a result of such changes or
          cancellation of the Contest.
        </li>
        <li>
          16) All prizes which are not won or remain unclaimed after 2 months of
          the announcement of the winners, or their equivalent value shall,
          unless the Minister directs otherwise, be donated to the Community
          Chest or to such other charity as may be approved by the Minister.
        </li>
        <li>
          17) AptaAdvantage reserves the right to determine at their sole and
          absolute discretion whether a Participant has met all the requirements
          to participate in the Contest, and disqualify any person tempering
          with the Contest process or the operation of the Contest Site
          (OneStepAheadFoundation.sg).
        </li>
        <li>
          18) AptaAdvantage further reserves the right, but shall not be
          obliged, to select reserve winning Participants to substitute any
          winning Participants subsequently found to be disqualified for any
          reason. AptaAdvantage&apos;s determination of the winning Participants
          shall be final, conclusive and binding, and no appeal or
          correspondence will be entertained. The prize to the Participant is
          non-transferable and the obligations and benefits under these terms
          and conditions are non-assignable.
        </li>
        <li>
          19) By taking part in this Contest, you understand and accept without
          condition that AptaAdvantage elect to use your personal information
          contained herein for internal and/or external marketing purposes in a
          manner it deems fit, whilst according your privacy or confidentiality
          with the highest priority.
        </li>
        <li>
          20) The Participant agrees to grant a royalty-free, worldwide,
          non-exclusive, perpetual, transferable, sub licensable and irrevocable
          licence to AptaAdvantage, their agents or any party authorised by
          AptaAdvantage, to use, publish, modify, adapt, integrate, perform in
          public, communicate to the public, broadcast and reproduce any
          Contents related to Participant, in whole or in part in or on any and
          all media for the purpose of operating and promoting the Contest and
          such future editions of the Contest, and/or other purposes in order to
          promote or market AptaAdvantage, without paying any sums tothe
          Participant or any person or entity. The Participant further agrees
          that any moral and personality rights he/she has in the Contents will
          be waived to the fullest extent possible, and the Participant agrees
          to procure that any moral and personality rights that a third party
          may have in the Contents will be so waived.
        </li>
        <li>
          21) AptaAdvantage may in their absolute discretion at any time edit or
          remove any Contents.
        </li>
        <li>
          22) AptaAdvantage is not responsible for the Contents posted by
          Participants for the Contest. All opinions and comments expressed by
          Participants on the site are expressed in their individual capacities
          and are not representative of AptaAdvantage&apos;s views.
        </li>
        <li>
          23) To the extent permitted by applicable law, the Participant agrees
          that AptaAdvantage will not be liable, under any circumstances and in
          any way, for any errors or omissions, loss, damage, costs and expenses
          of any kind suffered or incurred as a result of their participation
          (or inability to participate) in the Contest, any Contents posted by
          other Participants, or arising from the non-award or acceptance of any
          prize of the Contest. The Participant agrees to be liable to and
          indemnify AptaAdvantage and their respective employees and agents, in
          the event any of the foregoing parties suffer or incur any, loss,
          damage, costs or expenses arising from or related to the
          Participant&apos;s acts or omissions in relation to the Contest
          (including, but not limited to, their participation in the Contest,
          provision of the Contents or the Participant&apos;s breach of Clauses
          above).
        </li>
        <li>
          24) If the Participant is in breach of any of these terms and
          conditions, AptaAdvantage may immediately withdraw the
          Participant&apos;s entry in the Contest. AptaAdvantage&apos;s decision
          in all matters arising out of or in connection with this Contest is
          final and conclusive and no correspondence will be entertained.
        </li>
        <li>
          25) If there is any inconsistency between the terms and conditions
          herein and the Other Terms (includes Terms of Use and other terms
          &amp; conditions of privileges), the terms herein shall prevail only
          to the extent of such inconsistency. These terms and conditions shall
          be governed by the laws of Singapore and the Participant,
          AptaAdvantage hereby submit to the exclusive jurisdiction of the
          courts of Singapore.
        </li>
      </ol>
    </Modal>
  );
}
