import { useEffect, useState } from 'react'
import AdaptableCard from '@/components/shared/AdaptableCard'
import Loading from '@/components/shared/Loading'
import Container from '@/components/shared/Container'
import DoubleSidedImage from '@/components/shared/DoubleSidedImage'
import CustomerProfile from './components/CustomerProfile'
import PaymentHistory from './components/PaymentHistory'
import CurrentSubscription from './components/CurrentSubscription'
import PaymentMethods from './components/PaymentMethods'
import reducer, { getCustomer, useAppDispatch, useAppSelector } from './store'

import { injectReducer } from '@/store'
import isEmpty from 'lodash/isEmpty'
import useQuery from '@/utils/hooks/useQuery'
import MOM from './components/Mom'
import { Tabs } from '@/components/ui'
import TabList from '@/components/ui/Tabs/TabList'
import TabNav from '@/components/ui/Tabs/TabNav'
import TabContent from '@/components/ui/Tabs/TabContent'
import PersonalInfoForm from '../CustomerForm/PersonalInfoForm'

injectReducer('crmCustomerDetails', reducer)

const CustomerDetail = () => {
    const dispatch = useAppDispatch()

    const query = useQuery()

    const data = useAppSelector(
        (state) => state.crmCustomerDetails.data.profileData
    )
    const loading = useAppSelector(
        (state) => state.crmCustomerDetails.data.loading
    )

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = () => {
        const id = query.get('lead_id')
        if (id) {
            dispatch(getCustomer({ id }))
        }
    }
    const [projects, setprojects] = useState<any[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/project?id=65c32e19e0f36d8e1f30955c',);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const jsonData = await response.json();
          console.log(jsonData.data.projects);
          
          setprojects(jsonData.data.projects);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    console.log(data);
    

    return (
        <Container className="h-full">
            <Loading loading={loading}>
                {!isEmpty(data) && (
                    <div className="flex flex-col xl:flex-col gap-4">
                       
                        <div className="w-full">
                            <AdaptableCard>
                                {/* <CurrentSubscription /> */}

                                <Tabs defaultValue="details">
                            <TabList>
                                
                                <TabNav value="details">
                                    Details
                                </TabNav>
                                <TabNav value="personalInfo">
                                    Quotation
                                </TabNav>
                                <TabNav value="social">Minutes Of Meeting</TabNav>
                            </TabList>
                            <div className="p-6">
                                <TabContent value="details">
                                   <CustomerProfile data={data}/>
                                </TabContent>
                                <TabContent value="personalInfo">
                                   <PaymentHistory/>
                                </TabContent>
                                <TabContent value="social">
                                   <MOM/>
                                </TabContent>
                            </div>
                        </Tabs>
                            </AdaptableCard>
                        </div>
                    </div>
                )}
            </Loading>
            {!loading && isEmpty(data) && (
                <div className="h-full flex flex-col items-center justify-center">
                    <DoubleSidedImage
                        src="/img/others/img-2.png"
                        darkModeSrc="/img/others/img-2-dark.png"
                        alt="No user found!"
                    />
                    <h3 className="mt-8">No user found!</h3>
                </div>
            )}
        </Container>
    )
}

export default CustomerDetail
