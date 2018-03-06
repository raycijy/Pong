const Paddle = function (player, color){

	const c = color
	const w = 30
	const h = 200
	const p = player


	const x = p === 1 ? 0 : width - w

	const speed = 5

	let y = Math.floor(height / 2 )

	let score = 0 

	const getX = function(){

		return x

	}
	const getY = function(){
		return y
	}

	const getW = function(){
			return w
	}

	const getH = function(){
		return h
	}


	const Up=-1;
	const Down =1;



	const draw = function(){
		noStroke()
		rectMode(CORNER)
		fill(c)
		rect(x,y,w,h)



	}

	const move = function(dir){

		if(edge(dir))
		y+=(speed * dir)

	}

	const getScore = function(){

		return score
	}

	const edge = function(dir){

		
		return (dir === Up && y >0 || dir === Down && y <height -h)

	}

	const upDateScore = function(){

		score++;
	}

	return{
		draw,
		move,
		edge,
		getX,
		getY,
		getH,
		getW,
		getScore,
		upDateScore,
	}


}