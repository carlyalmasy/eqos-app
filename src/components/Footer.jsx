import React from 'react';

const today = new Date();

export default function Footer() {
  return (
    <>
        <p>
            Copyright &copy; 2023 - {today.getFullYear()} EQOS
        </p>
    </>
  )
}