import { FC } from 'react';
import { UserProfile } from '../types/userProfile';

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = ({ user }) => {
  const style = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '0 16px',
    margin: '8px',
  };

  return (
    <dl style={style}>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>メール</dt>
      <dd>{user.email}</dd>
      <dt>住所</dt>
      <dd>{user.address}</dd>
    </dl>
  );
};
