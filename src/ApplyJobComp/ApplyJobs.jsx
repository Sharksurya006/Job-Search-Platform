import React, { useState } from 'react'
import { IoMdTime } from "react-icons/io";
import { IconX, IconCheck } from '@tabler/icons-react';
import Amazon from '../Gallery/amazon-logo.jpg'
import { Divider, FileInput, Notification, NumberInput, Textarea, TextInput } from '@mantine/core';
import { FiPaperclip } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
const ApplyJobs = () => {
   const[preview,setPreview] = useState(false)
   const[submit,setSubmit] = useState(false)
   let x = 3;
   const[sec,setSec] = useState(x)
   const navigate = useNavigate()
  const handlePreview = () =>{
      setPreview(!preview)
  }
  const handleSubmit = () =>{
      setSubmit(!submit)
      setInterval(()=>{
         x--
         setSec(x);
         if(x == 0)
          navigate('/find-jobs')
      },1000)
  }
  return (
    <>
    <div className="w-2/3 mx-auto">
      <div className="flex justify-between px-[5px] items-center">
        <div className="flex items-center gap-6 pt-[20px]">
          <img className="h-[60px] w-[60px]" src={Amazon} />
          <div className="flex flex-col gap-1 text-2xl">
            <div>
              <h1 className="">Software Engineer</h1>
            </div>
            <div className="flex gap-4 text-[18px] items-center">
              <div><h1>Amazon</h1></div>
              <div className="flex items-center gap-2">
                <div><h1>200 applicants</h1></div>
                <p><IoMdTime /></p>
                <div><p>4 days ago</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider className="my-5" size="xs" color="black" />
      <div className="text-2xl font-semibold">
        Submit your Application
      </div>
      <div>
        <div className="[&>*]:w-1/2 flex gap-10 my-3">
          <TextInput label="Full Name" readOnly={preview} variant= {preview?"unstyled":"default"} className={`${preview?"text-green-700 font-semibold":""}`} withAsterisk description="Enter your full name" />
          <TextInput label="Email" readOnly={preview} variant= {preview?"unstyled":"default"} className={`${preview?"text-green-700 font-semibold":""}`} withAsterisk description="Enter Email id" placeholder="Enter your Email" />
        </div>
        <div className="[&>*]:w-1/2 flex gap-10 my-3">
          <NumberInput
            label="Phone No"
            description="Personal Phone Number"
            placeholder="Phone No"
            clampBehavior="strict"
            withAsterisk
            min={0}
            max={9999999999}
            readOnly={preview} variant= {preview?"unstyled":"default"} className={`${preview?"text-green-700 font-semibold":""}`}
          />
          <TextInput label="URL" readOnly={preview} variant= {preview?"unstyled":"default"} className={`${preview?"text-green-700 font-semibold":""}`} description="Enter portfolio or personal website link (if any)" placeholder="Enter URL" />
        </div>
        <div className="[&>*]:w-1/2 flex gap-10 my-3">
          <FileInput
          withAsterisk
        rightSection={!preview?<FiPaperclip className="w-[20px] h-[20px]"/>:""}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
         mt="md"
         readOnly={preview} variant= {preview?"unstyled":"default"} className={`${preview?"text-green-700 font-semibold":""}`}
      />
          <TextInput label="Email" readOnly={preview} variant= {preview?"unstyled":"default"} className={`${preview?"text-green-700 font-semibold":""}`}  withAsterisk description="Enter Email id" placeholder="Enter your Email" />
        </div>

      </div>
      <div>
        <Textarea
      label="Cover Letter"
      placeholder="Type Something about yourself..."
      autosize
        minRows={4}
        readOnly={preview} variant= {preview?"unstyled":"default"} className={`${preview?"text-green-700 font-semibold":""}`}
    />
      </div>
    </div>
    <div className="flex gap-3 justify-end w-2/3 ml-[250px] mt-[30px]">
      {
        !preview ? <button className="px-4 py-3 rounded-md cursor-pointer bg-green-500 font-semibold" onClick={handlePreview}>Preview</button> : <button className="px-4 py-3 rounded-md cursor-pointer bg-green-500 font-semibold" onClick={handlePreview}>Edit</button>
      } 
       <button className="px-4 py-3 rounded-md cursor-pointer bg-black text-white font-semibold hover:bg-green-500" onClick={handleSubmit}>Submit</button>
    </div>
     <Notification icon={<IconCheck size={20}/>} 
     className={`border-green-500 -translate-y-20 !fixed top-0 left-[40%] transition duration-300 ease-in-out ${submit?"translate-y-0":""}`}
     color="teal" title="Application Submitted" mt="lg" withBorder withCloseButton={false}>
         redirected shortly in {sec} seconds...
      </Notification>
    </>
  )
}

export default ApplyJobs