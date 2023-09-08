
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'

const App = ()=>(
  <BrowserRouter>
<Box sx={{backgroundColor:'#000'}}>
Navbar 
<Routes>
  <Route path='/' element={<Feed/>} />
  <Route path='/video:id' element={<VideoDetails/>} />
  <Route path='/channel:id' element={<ChannelDetails/>} />
  <Route path='/search/:' element={<VideoDetails/>} />


</Routes>
</Box>
  </BrowserRouter>
)

export default App
