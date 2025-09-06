
import { Toaster, toast } from "react-hot-toast";
import { nombresLatinos } from "../utils/Nombres";
import { useEffect, useState } from "react";
export default function Toast() {
    const randomName = () => {
        let randomName = ""
        let randomIndex = 0
        randomIndex = Math.floor(Math.random() * nombresLatinos.length)
        randomName = nombresLatinos[randomIndex]
        return randomName
    }
    const [selectedName, setSelectedName] = useState<string>(randomName)

    useEffect(() => {
        const interval = setInterval(() => {
            randomName()
            setSelectedName(randomName);
            toast.success(`${selectedName} ha comprado nuestro recetario 🌟🎉`, {duration: 2500})
        }, 10000)

        return () => clearInterval(interval)
    })

    return (
        <div>
            <Toaster position="top-right"  />
        </div>
    );
}
