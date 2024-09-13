import { Fragment } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";

// TODO: What props this comp. should have?

const CarDetails = () => (
  <>
    {/* TODO: Fix this after u add props */}
    <Transition appear show= as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* TODO: Make scrollable after 90vh */}
              <DialogPanel className="relative w-full max-w-lg max-h-[90vh] transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  type="button"
                  // TODO: Make X btn stay on top right
                  className=" z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  onClick={closeModal}
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                <div className="flex-1 flex flex-col gap-3">
                  <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src={generateCarImageUrl(car)}
                      alt="car model"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "29")}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "33")}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "13")}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-4">

                  {/* TODO: Fix this so that it look like this https://youtu.be/pUNSHPyVryU?list=PL6QREj8te1P7gixBDSU8JLvQndTEEX3c3&t=7891 */}
                    {(() => (
                      <div
                    
                      >
                        <h4 className="text-grey capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="text-black-100 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default CarDetails;
