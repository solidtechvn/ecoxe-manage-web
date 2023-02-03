import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar
} from '@coreui/icons-pro';
import CIcon from '@coreui/icons-react';
import {
  CBadge,
  CNavGroup,
  CNavGroupItems,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler
} from '@coreui/react-pro';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/img/logo.png';
import logoIcon from '../../assets/img/logoIcon.png';
import { RootState } from '../../reducers';
import { useRouter } from '../../shared/utils/hooks/useRouter';
import AnnotationIcon from '../Icons/AnnotationIcon';
import BriefCaseIcon from '../Icons/BriefCaseIcon';
import CarIcon from '../Icons/CarIcon';
import CPUChipIcon from '../Icons/CPUChipIcon';
import NavigationPointerIcon from '../Icons/NavigationPointerIcon';
import NavigationPointerOffIcon from '../Icons/NavigationPointerOffIcon';
import UserIcon from '../Icons/UserIcon';
import { toggleSidebar } from './reducer';

interface ICustomCNavItem {
  href: string;
  customClassname?: string;
  children: React.ReactNode;
}

export const CustomCNavItem = ({ href, children, customClassname }: ICustomCNavItem) => {
  const { location } = useRouter();
  return (
    <CNavItem
      href={href}
      active={String(`#${location.pathname}`).includes(href)}
      className={`${customClassname} text-break text-md`}
    >
      {children}
    </CNavItem>
  );
};

const TheSidebar = () => {
  const { redirectView } = useRouter();
  const dispatch = useDispatch();
  const containerState = useSelector((state: RootState) => state.container);
  const { sidebarShow } = containerState;
  const [unfoldable, setUnfoldable] = useState<boolean>(false);

  return (
    <CSidebar
      className="sidebar-custom"
      position="fixed"
      visible={sidebarShow}
      unfoldable={unfoldable}
      onVisibleChange={(val: boolean) => dispatch(toggleSidebar(val))}
    >
      <CSidebarBrand className="d-none d-md-flex bg-white cursor-pointer" onClick={redirectView('/')}>
        <img className="sidebar-brand-full" src={logo} width={126.44} height={31} alt="logoText" />
        <img className="sidebar-brand-narrow" src={logoIcon} width={26.44} height={31} alt="logo" />
      </CSidebarBrand>
      <CSidebarNav>
        <div className="title-custom mt-0">
          <CNavTitle className='mt-0'>Quản lý thiết bị</CNavTitle>
        </div>
        <CustomCNavItem href="#/table">
          <CPUChipIcon className="nav-icon" viewBox="-1 0 23 23" />
          Thiết bị
        </CustomCNavItem>
        <CustomCNavItem href="#/dashboard">
          <AnnotationIcon className="nav-icon" viewBox="-2 0 23 23" />
          Thông tin Thiết bị
        </CustomCNavItem>

        <div className="title-custom">
          <CNavTitle>Quản lý phương tiện</CNavTitle>
        </div>
        <CustomCNavItem href="#/theme/colors">
          <CarIcon className="nav-icon" viewBox="-1 0 23 23" />
          Phương tiện
        </CustomCNavItem>

        <div className="title-custom">
          <CNavTitle>Quản lý người dùng</CNavTitle>
        </div>
        <CustomCNavItem href="#/theme/typography">
          <UserIcon className="nav-icon" viewBox="-3 0 20 20" />
          Người dùng
        </CustomCNavItem>

        <div className="title-custom">
          <CNavTitle>Thông tin cấu hình</CNavTitle>
        </div>
        <CustomCNavItem href="#/base/accordion">
          <BriefCaseIcon className="nav-icon" viewBox="-1 0 23 23" />
          Thông tin chủ xe
        </CustomCNavItem>

        <div className="title-custom">
          <CNavTitle>Theo dõi</CNavTitle>
        </div>
        <CustomCNavItem href="#/base/breadcrumbs">
          <NavigationPointerIcon className="nav-icon" viewBox="-2 0 23 23" />
          Giám sát
        </CustomCNavItem>
        <CustomCNavItem href="#/base/cards">
          <NavigationPointerOffIcon className="nav-icon" viewBox="-1 0 23 23" />
          Chặn giám sát
        </CustomCNavItem>
        {/* ?///////////////// Local //////////////////////// */}
        <div className="title-custom">
          <CNavTitle>Nav Title</CNavTitle>
        </div>

        <CustomCNavItem href="#/table">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Table
        </CustomCNavItem>
        <CustomCNavItem href="#/dashboard">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Dashboard
          <CBadge color="info ms-auto">NEW</CBadge>
        </CustomCNavItem>
        <div className="title-custom">
          <CNavTitle>Theme</CNavTitle>
        </div>
        <CustomCNavItem href="#/theme/colors">
          <CIcon icon={cilDrop} customClassName="nav-icon" />
          Colors
        </CustomCNavItem>
        <CustomCNavItem href="#/theme/typography">
          <CIcon icon={cilPencil} customClassName="nav-icon" />
          Typography
        </CustomCNavItem>
        <div className="title-custom">
          <CNavTitle>Components</CNavTitle>
        </div>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilPuzzle} customClassName="nav-icon" /> Base
            </>
          }
        >
          <CNavGroupItems>
            <CustomCNavItem href="#/base/accordion">Accordion</CustomCNavItem>
            <CustomCNavItem href="#/base/breadcrumbs">Breadcrumb</CustomCNavItem>
            <CustomCNavItem href="#/base/cards">Cards</CustomCNavItem>
            <CustomCNavItem href="#/base/carousels">Carousel</CustomCNavItem>
            <CustomCNavItem href="#/base/collapses">Collapse</CustomCNavItem>
            <CustomCNavItem href="#/base/jumbotrons">Jumbotron</CustomCNavItem>
            <CustomCNavItem href="#/base/list-groups">List group</CustomCNavItem>
            <CustomCNavItem href="#/base/breadcrumbs">{`Navs & Tabs`}</CustomCNavItem>
            <CustomCNavItem href="#/base/paginations">Pagination</CustomCNavItem>
            <CustomCNavItem href="#/base/placeholders">Placeholders</CustomCNavItem>
            <CustomCNavItem href="#/base/popovers">Popovers</CustomCNavItem>
            <CustomCNavItem href="#/base/progress">Progress</CustomCNavItem>
            <CustomCNavItem href="#/base/spinners">Spinners</CustomCNavItem>
            <CustomCNavItem href="#/base/tables">Tables</CustomCNavItem>
            <CustomCNavItem href="#/base/tooltips">Tooltips</CustomCNavItem>
          </CNavGroupItems>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilCursor} customClassName="nav-icon" /> Buttons
            </>
          }
        >
          <CNavGroupItems>
            <CustomCNavItem href="#/buttons/buttons">Buttons</CustomCNavItem>
            <CustomCNavItem href="#/buttons/button-groups">Buttons groups</CustomCNavItem>
            <CustomCNavItem href="#/buttons/dropdowns">Dropdowns</CustomCNavItem>
          </CNavGroupItems>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilNotes} customClassName="nav-icon" /> Forms
            </>
          }
        >
          <CNavGroupItems>
            <CustomCNavItem href="#/forms/form-control">Form Control</CustomCNavItem>
            <CustomCNavItem href="#/forms/select">Select</CustomCNavItem>
            <CustomCNavItem href="#/forms/checks-radios">{'Checks & Radios'}</CustomCNavItem>
            <CustomCNavItem href="#/forms/range">Range</CustomCNavItem>
            <CustomCNavItem href="#/forms/input-group">Input Group</CustomCNavItem>
            <CustomCNavItem href="#/forms/floating-labels">Floating Labels</CustomCNavItem>
            <CustomCNavItem href="#/forms/layout">Layout</CustomCNavItem>
            <CustomCNavItem href="#/forms/validation">Validation</CustomCNavItem>
          </CNavGroupItems>
        </CNavGroup>
        <CustomCNavItem href="#/charts">
          <CIcon icon={cilChartPie} customClassName="nav-icon" />
          Charts
        </CustomCNavItem>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilStar} customClassName="nav-icon" /> Icons
            </>
          }
        >
          <CNavGroupItems>
            <CustomCNavItem href="#/icons/coreui-icons">
              CoreUI Free <CBadge color="success ms-auto">NEW</CBadge>
            </CustomCNavItem>
            <CustomCNavItem href="#/icons/flags">CoreUI Flags</CustomCNavItem>
            <CustomCNavItem href="#/icons/brands">CoreUI Brands</CustomCNavItem>
          </CNavGroupItems>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilBell} customClassName="nav-icon" /> Notifications
            </>
          }
        >
          <CNavGroupItems>
            <CustomCNavItem href="#/notifications/alerts">Alerts</CustomCNavItem>
            <CustomCNavItem href="#/notifications/badges">Badges</CustomCNavItem>
            <CustomCNavItem href="#/notifications/modals">Modal</CustomCNavItem>
            <CustomCNavItem href="#/notifications/toasts">Toasts</CustomCNavItem>
          </CNavGroupItems>
        </CNavGroup>
        <CustomCNavItem href="#/widgets">
          <CIcon customClassName="nav-icon" icon={cilCalculator} />
          Widgets
          <CBadge color="info ms-auto">NEW</CBadge>
        </CustomCNavItem>
        <div className="title-custom">
          <CNavTitle>Extras</CNavTitle>
        </div>
        <CNavGroup
          toggler={
            <>
              <CIcon icon={cilStar} customClassName="nav-icon" /> Pages
            </>
          }
        >
          <CNavGroupItems>
            <CustomCNavItem href="#/login">Login</CustomCNavItem>
            <CustomCNavItem href="#/register">Register</CustomCNavItem>
            <CustomCNavItem href="#/404">Error 404</CustomCNavItem>
            <CustomCNavItem href="#/500">Error 500</CustomCNavItem>
          </CNavGroupItems>
        </CNavGroup>
      </CSidebarNav>
      <CSidebarToggler className="d-none d-lg-flex" onClick={() => setUnfoldable(!unfoldable)} />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
