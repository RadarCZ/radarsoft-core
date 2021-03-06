import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class ChangelogPosts {
	@PrimaryGeneratedColumn()
	public id!: number;

	@Column()
	public version!: string;

	@CreateDateColumn()
	public dateDeployed!: string;
}
