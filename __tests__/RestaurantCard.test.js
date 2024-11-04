import { render, screen } from "@testing-library/react"
import RestaurantCard from "../src/components/Body/RestaurantCard"
import MOCK_DATA from '../mocks/resCardMock.json'
import '@testing-library/jest-dom'

it('Should render Restaurant Card component with props Data',()=>{
    render(<RestaurantCard resDetails={MOCK_DATA}/>)
    const name = screen.getByText('Chai Kulcha Bar')
    expect(name).toBeInTheDocument();
})