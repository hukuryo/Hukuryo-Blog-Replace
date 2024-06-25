import { SearchInput } from '@/app/components/SearchInput';
import { Profile } from '@/app/components/Profile';

export const SideBar = () => {
  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="h-full ml-10 hidden mb-5 lg:block"
      >
        <SearchInput />
        <Profile />
        {/* <Recommendation articles={ articles } pass={pass}/> */}
      </aside>
    </>
  );
};
