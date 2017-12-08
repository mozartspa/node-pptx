module.exports = {
	declaration: { attributes: { version: '1.0', encoding: 'UTF-8', standalone: 'yes' } },
	elements: [
		{
			type: 'element',
			name: 'p:sldLayout',
			attributes: {
				'xmlns:a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
				'xmlns:r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
				'xmlns:p': 'http://schemas.openxmlformats.org/presentationml/2006/main',
				type: 'twoObj',
				preserve: '1',
			},
			elements: [
				{
					type: 'element',
					name: 'p:cSld',
					attributes: { name: 'Two Content' },
					elements: [
						{
							type: 'element',
							name: 'p:spTree',
							elements: [
								{
									type: 'element',
									name: 'p:nvGrpSpPr',
									elements: [
										{ type: 'element', name: 'p:cNvPr', attributes: { id: '1', name: '' }, elements: [] },
										{ type: 'element', name: 'p:cNvGrpSpPr', elements: [] },
										{ type: 'element', name: 'p:nvPr', elements: [] },
									],
								},
								{
									type: 'element',
									name: 'p:grpSpPr',
									elements: [
										{
											type: 'element',
											name: 'a:xfrm',
											elements: [
												{ type: 'element', name: 'a:off', attributes: { x: '0', y: '0' }, elements: [] },
												{ type: 'element', name: 'a:ext', attributes: { cx: '0', cy: '0' }, elements: [] },
												{ type: 'element', name: 'a:chOff', attributes: { x: '0', y: '0' }, elements: [] },
												{ type: 'element', name: 'a:chExt', attributes: { cx: '0', cy: '0' }, elements: [] },
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '2', name: 'Title 1' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{ type: 'element', name: 'p:nvPr', elements: [{ type: 'element', name: 'p:ph', attributes: { type: 'title' }, elements: [] }] },
											],
										},
										{ type: 'element', name: 'p:spPr', elements: [] },
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{ type: 'element', name: 'a:lstStyle', elements: [] },
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Click to edit Master title style' }] },
															],
														},
														{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] },
													],
												},
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '3', name: 'Content Placeholder 2' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{ type: 'element', name: 'p:nvPr', elements: [{ type: 'element', name: 'p:ph', attributes: { sz: 'half', idx: '1' }, elements: [] }] },
											],
										},
										{
											type: 'element',
											name: 'p:spPr',
											elements: [
												{
													type: 'element',
													name: 'a:xfrm',
													elements: [
														{ type: 'element', name: 'a:off', attributes: { x: '457200', y: '1600200' }, elements: [] },
														{ type: 'element', name: 'a:ext', attributes: { cx: '4038600', cy: '4525963' }, elements: [] },
													],
												},
											],
										},
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{
													type: 'element',
													name: 'a:lstStyle',
													elements: [
														{ type: 'element', name: 'a:lvl1pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '2800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl2pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '2400' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl3pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '2000' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl4pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl5pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl6pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl7pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl8pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl9pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '0' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Click to edit Master text styles' }] },
															],
														},
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '1' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Second level' }] },
															],
														},
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '2' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Third level' }] },
															],
														},
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '3' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Fourth level' }] },
															],
														},
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '4' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Fifth level' }] },
															],
														},
														{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] },
													],
												},
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '4', name: 'Content Placeholder 3' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{ type: 'element', name: 'p:nvPr', elements: [{ type: 'element', name: 'p:ph', attributes: { sz: 'half', idx: '2' }, elements: [] }] },
											],
										},
										{
											type: 'element',
											name: 'p:spPr',
											elements: [
												{
													type: 'element',
													name: 'a:xfrm',
													elements: [
														{ type: 'element', name: 'a:off', attributes: { x: '4648200', y: '1600200' }, elements: [] },
														{ type: 'element', name: 'a:ext', attributes: { cx: '4038600', cy: '4525963' }, elements: [] },
													],
												},
											],
										},
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{
													type: 'element',
													name: 'a:lstStyle',
													elements: [
														{ type: 'element', name: 'a:lvl1pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '2800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl2pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '2400' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl3pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '2000' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl4pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl5pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl6pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl7pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl8pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
														{ type: 'element', name: 'a:lvl9pPr', elements: [{ type: 'element', name: 'a:defRPr', attributes: { sz: '1800' }, elements: [] }] },
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '0' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Click to edit Master text styles' }] },
															],
														},
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '1' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Second level' }] },
															],
														},
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '2' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Third level' }] },
															],
														},
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '3' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Fourth level' }] },
															],
														},
													],
												},
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{ type: 'element', name: 'a:pPr', attributes: { lvl: '4' }, elements: [] },
														{
															type: 'element',
															name: 'a:r',
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: 'Fifth level' }] },
															],
														},
														{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] },
													],
												},
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '5', name: 'Date Placeholder 4' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{ type: 'element', name: 'p:nvPr', elements: [{ type: 'element', name: 'p:ph', attributes: { type: 'dt', sz: 'half', idx: '10' }, elements: [] }] },
											],
										},
										{ type: 'element', name: 'p:spPr', elements: [] },
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{ type: 'element', name: 'a:lstStyle', elements: [] },
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{
															type: 'element',
															name: 'a:fld',
															attributes: { id: '{036EEA2E-C0C0-453E-845A-3EE4D9BD6F62}', type: 'datetimeFigureOut' },
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: '12/5/2017' }] },
															],
														},
														{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] },
													],
												},
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '6', name: 'Footer Placeholder 5' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{ type: 'element', name: 'p:nvPr', elements: [{ type: 'element', name: 'p:ph', attributes: { type: 'ftr', sz: 'quarter', idx: '11' }, elements: [] }] },
											],
										},
										{ type: 'element', name: 'p:spPr', elements: [] },
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{ type: 'element', name: 'a:lstStyle', elements: [] },
												{ type: 'element', name: 'a:p', elements: [{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] }] },
											],
										},
									],
								},
								{
									type: 'element',
									name: 'p:sp',
									elements: [
										{
											type: 'element',
											name: 'p:nvSpPr',
											elements: [
												{ type: 'element', name: 'p:cNvPr', attributes: { id: '7', name: 'Slide Number Placeholder 6' }, elements: [] },
												{ type: 'element', name: 'p:cNvSpPr', elements: [{ type: 'element', name: 'a:spLocks', attributes: { noGrp: '1' }, elements: [] }] },
												{
													type: 'element',
													name: 'p:nvPr',
													elements: [{ type: 'element', name: 'p:ph', attributes: { type: 'sldNum', sz: 'quarter', idx: '12' }, elements: [] }],
												},
											],
										},
										{ type: 'element', name: 'p:spPr', elements: [] },
										{
											type: 'element',
											name: 'p:txBody',
											elements: [
												{ type: 'element', name: 'a:bodyPr', elements: [] },
												{ type: 'element', name: 'a:lstStyle', elements: [] },
												{
													type: 'element',
													name: 'a:p',
													elements: [
														{
															type: 'element',
															name: 'a:fld',
															attributes: { id: '{EEA4CB10-01EC-4F0B-B0D3-B7B5571F5409}', type: 'slidenum' },
															elements: [
																{ type: 'element', name: 'a:rPr', attributes: { lang: 'en-US', smtClean: '0' }, elements: [] },
																{ type: 'element', name: 'a:t', elements: [{ type: 'text', text: '‹#›' }] },
															],
														},
														{ type: 'element', name: 'a:endParaRPr', attributes: { lang: 'en-US' }, elements: [] },
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{ type: 'element', name: 'p:clrMapOvr', elements: [{ type: 'element', name: 'a:masterClrMapping', elements: [] }] },
			],
		},
	],
};