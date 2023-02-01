import { cilMenu } from '@coreui/icons-pro';
import CIcon from '@coreui/icons-react';
import { CBadge, CContainer, CHeader, CHeaderNav, CHeaderToggler, CNavItem, CNavLink } from '@coreui/react-pro';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import BellIcon from '../Icons/BellIcon';
import LogoutIcon from '../Icons/LogoutIcon';
import UserIcon from '../Icons/UserIcon';
import AppBreadcrumb from './AppBreadcrumb';
import { toggleAside, toggleSidebar } from './reducer';

const TheHeader = () => {
  const totalNotSeen = 20;
  const dispatch = useDispatch();
  const { sidebarShow, asideShow } = useSelector((state: RootState) => state.container);

  const toggleSidebarDesktop = () => {
    dispatch(toggleSidebar(!sidebarShow));
  };

  const toggleASideDesktop = () => {
    dispatch(toggleAside(!asideShow));
  };

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {/* <CHeaderBrand className="mx-auto d-md-none" >
      </CHeaderBrand> */}
        <CHeaderNav className="d-flex me-auto">
          <CHeaderToggler className="ps-1" onClick={toggleSidebarDesktop}>
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CNavItem className="nav-breadcrumb">
            <AppBreadcrumb />
          </CNavItem>
          {/* <CNavItem>
            <CNavLink href="#">Home</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem> */}
          {/* <CIcon icon={cilBell} size="lg" /> */}
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem className="me-1">
            <CNavLink onClick={toggleASideDesktop} className="cursor-pointer">
              <div className="position-relative">
                <BellIcon color="#98A2B3" width={17} height={18} className="align-text-top" />
                <CBadge color="danger" className={`${totalNotSeen > 0 ? '' : 'd-none'} header-icon-badge`}>
                  {totalNotSeen > 100 ? '+99' : totalNotSeen}
                </CBadge>
              </div>
            </CNavLink>
          </CNavItem>
          {/* <CNavItem>
            <CNavLink onClick={toggleASideDesktop}>
              <BellIcon className="custom-icon-svg cursor-pointer" />
            </CNavLink>
          </CNavItem> */}
          <CNavItem className="me-1">
            <CNavLink className="py-1 cursor-pointer text-md" href="#">
              <UserIcon color="#98A2B3" width={17} height={18} className="me-1" />
              Khanhpm
              {/* {user?.username} */}
            </CNavLink>
          </CNavItem>
          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem> */}
          <CNavItem>
            <CNavLink href="#">
              <LogoutIcon color="#98A2B3" width={17} height={18} className="align-text-top" />

              {/* <CIcon icon={cilEnvelopeOpen} size="lg" /> */}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  );
};

export default TheHeader;
