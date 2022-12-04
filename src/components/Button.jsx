import React from "react"

const Button = () => {
  return (
    <a href="#_" class="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-slate-100 border-0 border-b-2 border-stone-600 rounded hover:text-white group hover:bg-gray-50">
    <span class="absolute left-0 block w-full h-0 transition-all bg-blue-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="relative">Calculate</span>
    </a>
  )
}
export default Button