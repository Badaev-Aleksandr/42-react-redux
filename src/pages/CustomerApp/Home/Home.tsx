import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import {
  customerSliceAction,
  customerSliceSelector,
} from "../../../store/redux/customer/customerSlice"
import { HomePageWrapper, UserName } from "./styles"
import { useEffect } from "react"

function Home() {
  const dispatch = useAppDispatch()

  const { data, status, error } = useAppSelector(
    customerSliceSelector.personData
  )

  useEffect(() => {
    dispatch(customerSliceAction.getData())
  }, [])
   console.log(data);
   
  return (
    <HomePageWrapper>
      <UserName>Hello, {data.name}</UserName>
    </HomePageWrapper>
  )
}

export default Home
