import { cilLockLocked, cilUser } from '@coreui/icons-pro';
import CIcon from '@coreui/icons-react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow
} from '@coreui/react-pro';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { RootState } from '../../../reducers';
import { useRouter } from '../../../shared/utils/hooks/useRouter';
import { AppDispatch } from '../../../store';
import { ToastError } from '../../shared/toast/Toast';
import { ILoginForm, login } from './auth.api';
import { fetching, resetAll } from './auth.reducer';

interface ILocationPath {
  path?: string;
}

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { navigate, location } = useRouter();
  const state = location.state as ILocationPath;
  const { errorMessage, user } = useSelector((state: RootState) => state.authentication);

  const validationSchema = Yup.object().shape({
    username: Yup.string().trim().required('Không được để trống'),
    password: Yup.string().trim().required('Không được để trống'),
  });

  useEffect(() => {
    if (user) {
      const redirectPath = state?.path || '/BO';
      navigate(redirectPath, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (errorMessage) {
      ToastError('Có lỗi xảy ra, Vui lòng thử lại !');
      dispatch(resetAll());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  const initialValues: ILoginForm = { username: '', password: '', rememberMe: false };

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol xs={12} sm={10} md={8} lg={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Formik
                    enableReinitialize
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={(values) => {
                      dispatch(fetching());
                      dispatch(login(values));
                    }}
                  >
                    {({ isSubmitting, values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                      <CForm onSubmit={handleSubmit}>
                        <h1>Đăng nhập</h1>
                        <p className="text-medium-emphasis">Đăng nhập tài khoản hệ thống</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput
                            value={values.username}
                            onChange={handleChange}
                            type="text"
                            id="username"
                            name="username"
                            autoComplete="none"
                            placeholder="Tên đăng nhập"
                          />
                          <CFormFeedback
                            invalid
                            className={!!errors.username && touched.username ? 'd-block' : 'd-none'}
                          >
                            {errors.username}
                          </CFormFeedback>
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            value={values.password}
                            onChange={handleChange}
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="none"
                            placeholder="Mật khẩu"
                          />
                          <CFormFeedback
                            invalid
                            className={!!errors.password && touched.password ? 'd-block' : 'd-none'}
                          >
                            {errors.password}
                          </CFormFeedback>
                        </CInputGroup>
                        <CRow>
                          <CCol xs={6}>
                            <CButton color="primary" className="px-4" type="submit">
                              Đăng nhập
                            </CButton>
                          </CCol>
                          <CCol xs={6} className="text-right">
                            <CButton color="link" className="px-0" href="#/forgot">
                              Quên mật khẩu?
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
