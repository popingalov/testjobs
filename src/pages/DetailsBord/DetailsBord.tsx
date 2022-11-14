///

import DetailsBordDesk from 'components/DetailsBord/DetailsBordDesk';
import DetailsBordMob from 'components/DetailsBord/DetailsBordMob';
type TProps = {
  data: IData;
  starSize: {
    width: string;
    height: string;
  };
};
export default function DetailsBord({ data, starSize }: TProps) {
  return starSize.width === '10px' ? (
    <DetailsBordMob data={data} starSize={starSize} />
  ) : (
    <DetailsBordDesk data={data} starSize={starSize} />
  );
}
