import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavB from './components/NavB';
import { BookConsole } from './components/book/BookConsole';
import { MemberConsole } from './components/member/MemberConsole';
import { StaffConsole } from './components/staff/StaffConsole';

function App() {
  return (
    <>
      <NavB/>
      {/* <BookConsole/> */}
      {/* <MemberConsole/> */}
      <StaffConsole/>
    </>
  );
}

export default App;
