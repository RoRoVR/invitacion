'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

type ResponseGuest = {
  name: string,
  amount: number,
  code: string,
  res: string
}

type RCVPModalProp = {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>,

}
export default function RSVPModal({ openModal, setOpenModal}: RCVPModalProp) {
  

  const [loadingGuest, setLoadingGuest] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [guest, setGuest] = useState<ResponseGuest>({ name: "", amount: 0, code: "", res: "" });
  const [row, setRow] = useState("");
  const [code, setCode] = useState("");

  const getGuest = async (rowParam: string, codeParam: string) => {
    setLoadingGuest(true)
    if (!rowParam || !codeParam) {
      console.log("No se encontro ROW y CODE");
      return
    }

    try {
      const response = await fetch(`/api/invitation?row=${rowParam}&code=${codeParam}`);
      const data: { success: boolean, data: ResponseGuest } = await response.json();
      if (data.success) {
        setGuest({
          name: data.data.name,
          amount: data.data.amount,
          code: data.data.code,
          res: data.data.res,
        })
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingGuest(false);
    }
  }

  const postGuest = async (res: string) => {
    setLoadingResponse(true);
    if (!row || !code || !res) {
      console.log("No se encontro ROW, CODE o RES");
      return;
    }
    try {
      await fetch("/api/invitation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ row, code, res }),
      });
      setGuest({ ...guest, res });
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingResponse(false);
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const row = params.get("row");
    const code = params.get("code");
    setRow(row as string);
    setCode(code as string);
    if(row && code) getGuest(row, code);
  }, [])

  if (!openModal) return null;

  return (
    <div
      className=" fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <div
        className=" relative w-full max-w-lg rounded-4xl bg-[#f8f4ef] p-8 shadow-2xl"
      >
        <button onClick={() => setOpenModal(false)} className=" absolute right-5 top-5 text-gray-500 transition hover:text-black"
        ><IoClose /></button>
        <div className="text-center">
          <p className=" mb-3 uppercase tracking-[0.4rem] text-[#b08d57] text-sm">
            Confirmación de asistencia
          </p>

          <h2 className=" font-title text-5xl font-light text-[#2b2b2b] mb-6">
            ¿Nos acompañarán?
          </h2>

          <p className=" text-gray-600 leading-8 mb-8">
            Nos haría muchísima ilusión compartir este día tan especial junto a ustedes. Esperamos contar con su presencia para celebrar nuestra boda.
          </p>

          <div className=" mb-8 rounded-3xl bg-white p-6 shadow-sm border border-[#eadfce]">

            {loadingGuest ?
              <div className='w-full flex justify-center items-center'>
                <AiOutlineLoading className='animate-spin text-4xl' />
              </div>
              :
              <>
                <p className="text-sm uppercase tracking-[0.3rem] text-[#b08d57] mb-3">
                  Invitados
                </p>

                <h3 className="text-2xl font-semibold text-[#2b2b2b]">
                  {guest.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  Cantidad de pases:
                </p>

                <p className="text-4xl font-light mt-2 text-[#399179]">
                  {guest.amount}
                </p>
              </>
            }
          </div>

          <div className="flex flex-col gap-4">
            <button onClick={() => postGuest('SI')} className={`flex justify-center items-center rounded-full py-4 text-white font-semibold transition disabled:cursor-not-allowed disabled:bg-[#399179]/80
                ${guest.res === 'SI' ? 'bg-[#399179]' : 'bg-[#399179]/80 hover:bg-[#399179]'}`}
                disabled={loadingResponse}
            >
              {loadingResponse && <AiOutlineLoading className='animate-spin text-xl me-4'/>} 
              {(!loadingResponse && guest.res === 'SI') && <FaRegCircleCheck className='me-4'/>} 
              Sí, asistiremos
            </button>

            <button
              onClick={() => postGuest('NO')}
              disabled={loadingResponse}
              className={`flex justify-center items-center rounded-full py-4 font-semibold transition border disabled:cursor-not-allowed disabled:text-gray-600 disabled:border-gray-300
                ${guest.res === 'NO' ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-600 hover:border-gray-500'}`}
            >
              {loadingResponse && <AiOutlineLoading className='animate-spin text-xl me-4'/>}
              {(!loadingResponse && guest.res === 'NO') && <IoMdCloseCircleOutline className='me-4'/>} 
              No podremos asistir
            </button>
          </div>

          <p className=" mt-8 text-sm text-gray-500 tracking-wide">
            Fecha límite de confirmación:
            <span className="font-semibold text-[#2b2b2b] ms-2">
              20 de Julio de 2026
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}