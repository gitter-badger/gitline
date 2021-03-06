/**
 * Elements with two contents, that expand on double click
 */
 
	interface HTMLExpandableElement extends HTMLElement {
		whenShort(innerHTML: string): void;
		whenFull(innerHTML: string): void;
	}
	
	class Expandable {
		public static extend(element: HTMLElement): HTMLExpandableElement {
			var extended: HTMLExpandableElement = <HTMLExpandableElement> element;
			element.classList.add("gitline-expandable");
			
			extended.whenFull = (innerHTML: string) => {
				extended.onclick = (event) => {
					if(event.detail == 2) {
						extended.innerHTML = innerHTML;
						event.cancelBubble = true;
						element.classList.add("gitline-expandable-expanded");
					}
				};
			}
			
			extended.whenShort =  (innerHTML: string) => {
				extended.innerHTML = innerHTML;
					extended.onmouseout = (event) => {
					extended.innerHTML = innerHTML+ " ";
					element.classList.remove("gitline-expandable-expanded");
				};	
			}

		return extended;
		}		
	}
	
