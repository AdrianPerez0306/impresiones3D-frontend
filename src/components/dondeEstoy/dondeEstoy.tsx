import "./dondeEstoy.css";


export const DondeEstoy = ({ titulo }: { titulo: string }) => {


    return (
        <>
            <div className="site">
                <b>{titulo}</b>
            </div>
        </>
    )
};