export interface Business {
        $key?: string;
    	company?: string;
		category?: string;
		description?:string; 
        years_in_business?:string; 
		street_address?: string;
		city?: string;
		state?: string;
		zipcode?: string;
		phone?: string;
		email?: string;
        created_at: string;
}