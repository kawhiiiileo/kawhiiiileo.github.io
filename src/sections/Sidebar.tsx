import { profile } from '@/data/profile';

export function Sidebar() {
  return (
    <div className="profile-photo">
      <img
        src={profile.avatar}
        alt="Two people playing basketball in an indoor gym"
        width={1370}
        height={1772}
      />
    </div>
  );
}
