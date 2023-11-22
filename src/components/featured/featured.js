import { datasFromAPI } from "@/lib/datas";
import { cn } from "@/lib/utils";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";

function Featured({ name, tripImage, onClickPrev, onClickNext }) {
	return (
		<div className="relative rounded-2xl">
			<Image
				alt=""
				loading="lazy"
				src={tripImage}
				height={329}
				width={765}
				className="relative w-full h-full bg-contain"
			/>

			<div className="absolute left-10 top-[67px]">
				<div className="font-semibold pb-5">Nearest trip</div>
				<div className="text-5xl 2xl:text-7xl font-bold pb-4 2xl:pb-7">
					{name}
				</div>
				<div className="flex p-2 pl-0 pt-0 text-xs 2xl:text-xl">
					<button
						disabled={name === datasFromAPI[0].name}
						className={cn(
							name === datasFromAPI[0].name ? "bg-transparent" : "bg-white",
							"p-2 2xl:p-4 rounded-full"
						)}
						onClick={onClickPrev}
					>
						<HiOutlineArrowLeft />
					</button>
					<button
						disabled={name === datasFromAPI[1].name}
						className={cn(
							name === datasFromAPI[1].name ? "bg-transparent" : "bg-white",
							"p-2 2xl:p-4 rounded-full"
						)}
						onClick={onClickNext}
					>
						<HiOutlineArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Featured;