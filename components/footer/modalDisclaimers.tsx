import Modal from '../modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalDisclaimers({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} title="Disclaimers" onClose={onClose}>
      <ul>
        <li>
          <sup>1</sup> Only applicable to Aptamil Gold+ Stage 2, 3 &amp; 4 only
        </li>
        <li>
          <sup>2</sup> With reference to Agri-Food &amp; Veterinary Authority
          (AVA), Apr 2017, A Guide to Food Labelling and Advertisements and
          Chatchatee P et al. Effects of Growing-Up Milk Supplemented with
          Prebiotics and LCPUFAs on Infections in Young Children. JPGN 2014;
          58(4):428-437
        </li>
        <li>
          <sup>3</sup> scGOS:IcFOS(9:1)
        </li>
        <li>
          <sup>4</sup> Arslanoglu et al. 2008. Journal of Nutrition,
          138:1091-1095
        </li>
        <li>
          <sup>5</sup> Chatchatee P et al. Effects of Growing-Up Milk
          Supplemented With Prebiotics and LCPUFAs on Infections in Young
          Children. JPGN 2014; 58(4):428-437
        </li>
        <li>
          <sup>6</sup> As compared to other Growing Up Formula in Singapore for
          daily recommended feed. FAO/World Health Organisation recommends daily
          DHA intake level of 10-12mg/kg body weight for children 6-24 months,
          100-150mg DHA+EPA for children 2-4 years of age or 150-200mg DHA+EPA
          for children 4-6 years of age. Reference: FAO 2010. Fats and fatty
          acids in human nutrition. Report of an expert consultation. FAO Food
          and Nutrition Paper no.91. FAO: Rome.
        </li>
        <li>
          <sup>7</sup> Excludes infant formula (0-6months)
        </li>
      </ul>
    </Modal>
  );
}
