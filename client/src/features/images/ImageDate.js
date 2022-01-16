import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getImages } from './imageSlice'
import Image from './Image'
import { Grid } from '@mui/material'

function ImageDate() {
	const { dateMonthYear } = useParams();

	const images = useSelector(getImages)
		.map(img => ({
			...img, 
			date: new Date(img.date) 
		}))
		.sort((d1, d2) => d1.date - d2.date);

	let d = new Date('1/1/1500');
	const arr = [];
	let imgArr = [];
	for (let i = 0; i < images.length; i++){
		const currImg = images[i];
		const currDate = currImg.date;
		
		switch(dateMonthYear){
			case 'day':
				if (currDate.toDateString() !== d.toDateString()) {
					if (imgArr.length !== 0){
						arr.push(imgArr);
					}
					imgArr = [];
					arr.push(`${currDate.getUTCDate()}/${currDate.getUTCMonth()+1}/${currDate.getUTCFullYear()}`);
					d = currDate;
				}
				break;
			case 'month':
				if (currDate.getMonth() !== d.getMonth() || currDate.getYear() !== d.getYear()) {
					if (imgArr.length !== 0){
						arr.push(imgArr);
					}
					imgArr = [];
					arr.push(`${currDate.getUTCMonth()+1}/${currDate.getUTCFullYear()}`);
					d = currDate;
				}
				break;
			case 'year':
				if (currDate.getYear() !== d.getYear()) {
					if (imgArr.length !== 0){
						arr.push(imgArr);
					}
					imgArr = [];
					arr.push(`${currDate.getUTCFullYear()}`);
					d = currDate;
				}
				break;
			default:
				break;
		}

		imgArr.push({
			link: currImg.link, 
			title: currImg.title
		});
	}	
	arr.push(imgArr);
	let index = 0;
	return (
		<>
			{arr.map(item => {
				return typeof item === 'string' ?
				<h2 key={item}>{item}</h2>
				: <Grid container key={index++} spacing={2}>
					{item.map(img => <Image key={img.link} image={img}/>)}
				</Grid>  
			})}
		</>
	)
}

export default ImageDate;
