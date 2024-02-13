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
import { log } from 'console'
import { useLocation, useParams } from 'react-router-dom'
import { fetchDetails } from '../services/api'
import Contract from './components/Contract'

injectReducer('crmCustomerDetails', reducer)

const CustomerDetail = () => {
    const dispatch = useAppDispatch()

    const query = useQuery()

    const data = useAppSelector(
        (state) => state.crmCustomerDetails
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

    
  
    
    interface QueryParams {
        id: string;
        project_id: string;
      
      }
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    // Create an object to store and map the query parameters
    const allQueryParams: QueryParams = {
      id: queryParams.get('id') || '',
      project_id: queryParams.get('project_id') || '',

    };
    
    const [details, setDetails] = useState<any | null>(null);
    const[momdata,setmomdata]= useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://col-u3yp.onrender.com/v1/api/admin/getsingle/project/?project_id=${allQueryParams.project_id}&id=${allQueryParams.id}`);
                const data = await response.json();
                setDetails(data.data[0]);
                setmomdata(data.data[0].mom)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [allQueryParams.id]);
    console.log(momdata);
      return (
        <div>
        <Tabs defaultValue="tab1">
            <TabList>
                <TabNav value="tab1">Details</TabNav>
                <TabNav value="tab2">Quotation</TabNav>
                <TabNav value="tab3">MOM</TabNav>
                <TabNav value="tab4">Contract</TabNav>
            </TabList>
            <div className="p-4">
                <TabContent value="tab1">
                    <Container>
                        <CustomerProfile data={details}/>
                    </Container>
                </TabContent>
                <TabContent value="tab2">
                   <PaymentHistory/>
                </TabContent>
                <TabContent value="tab3">
                  <MOM data={momdata}/>
                </TabContent>
                <TabContent value="tab4">
                  <Contract/>
                </TabContent>
            </div>
        </Tabs>
    </div>
      );
 
};


export default CustomerDetail
